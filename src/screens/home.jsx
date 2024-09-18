import React, { useState, useEffect } from 'react';
import Navbar from '../components/navbar';
import Footer from '../components/footer';
import { FaSearch, FaUserCircle, FaComment, FaPaperPlane, FaPaperclip, FaSmile } from 'react-icons/fa';
import { useNavigate, useLocation } from 'react-router-dom';
import { getDocs, addDoc, collection, query, where, onSnapshot } from 'firebase/firestore';
import { db } from '../firebase.config';
import moment from 'moment'

const defaultImg = "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Default_pfp.svg/2048px-Default_pfp.svg.png"


const Home = () => {
  const [showChat, setShowChat] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);
  const [message, setMessage] = useState('');
  const [chatMessages, setChatMessages] = useState([]);
  const [chatlist, setChatlist] = useState([])
  const [searchVal, setSearchVal] = useState("");
  const [user, setUser] = useState();
  const [users, setUsers] = useState([]);
  const {state} = useLocation()
  

  const navigate = useNavigate()

  const handleChatClick = (user) => {
    console.log("🚀 ~ handleChatClick ~ user:", user)
    setSelectedUser(user);
    setShowChat(true);
  };
  useEffect(()=>{
    try{
        let myUid = localStorage.getItem("userId");
        const q = query(collection(db, "Chat"), where(state.Uid, "==", true), where(myUid, "==", true));
        const unsubscribe = onSnapshot(q, (docSnap) => {
      const list = [];
      docSnap.forEach((doc) => {
          list.push(doc.data());
        });
        list.sort((a, b) => a.createdAt - b.createdAt);
        setChatlist(list);
      });
      return ()=> unsubscribe()
    }
    catch(err){
      console.log(err)
    }
  },[state])
  useEffect(()=>{
  //   const storedUser = localStorage.getItem('selectedUser');
  // if (storedUser) {
  //   setSelectedUser(storedUser);
  // }
  getUsers()
},[])

const sendMsg = async ()=>{
  let myUid = await localStorage.getItem("userId");
  addDoc(collection(db, "Chat"), {
    message: message,
    [myUid]: true,
    [state.Uid]: true,
    senderUid: myUid,
    createdAt: Date.now(),
  })
  setMessage("")
}



  function handleSearchClick() {
    let arry = users.filter(item => item.name.toLowerCase().includes(searchVal.toLowerCase()))
    setUser(arry);
}
const getUsers = async ()=>{
  const list = []
  const dbSnap = await getDocs(collection(db, "users"))
  dbSnap.forEach((item)=>{
    list.push(item.data())
  })
  let myUid = localStorage.getItem("userId");
  const filteredUsers = list.filter(users => users.Uid !== myUid);
  setUsers(filteredUsers)
  setUser(filteredUsers)
}

let myUid = localStorage.getItem("userId")

  return (
    <div className="min-h-screen bg-gray-100 font-sans flex flex-col justify-between">
<div>
      <Navbar/>
      <main className="container mx-auto p-4">
        {!showChat ? (
          <div>
            <div className="mb-6 flex items-center justify-between">
              <h2 className="text-2xl font-semibold">Available Donors</h2>
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search donors..."
                  onChange={(e)=> setSearchVal(e.target.value)}
                  className="pl-10 pr-4 py-2 rounded-full border focus:outline-none focus:ring-2 focus:ring-red-500"
                />
                <FaSearch onClick={handleSearchClick} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {users.length > 0 ? (user.map((users, index) => {
                return <div key={index} className="bg-white rounded-lg shadow-md p-6 flex items-center space-x-4 transition-transform hover:scale-105">
                  	<img src={users.img || defaultImg} alt={users.name} className="w-16 h-16 rounded-full object-cover" />
                  	<div className="flex-grow">
                    	<h3 className="text-lg font-semibold">{users.name}</h3>
                    	<p className="text-gray-600">Blood Group: <span className="font-bold text-red-600">{users.Blood}</span></p>
                    	<p className="text-gray-600">Age: <span className="font-bold text-red-600">{users.Age}</span></p>
                    	<p className="text-gray-600">City: <span className="font-bold text-red-600">{users.City}</span></p>
                  	</div>
                  	<button
                    	onClick={() => {handleChatClick(users), navigate('/home', {state: {...users}})}}
                    	className="bg-red-500 text-white p-2 rounded-full hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50"
                    	aria-label={`Chat with ${users.name}`}
                  	>
                    	<FaComment />
                  	</button>
                	</div>
})): (
  <p className='text-3xl font-semibold'>No user available</p>
)}
              
            </div>
          </div>
        ) : (
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="flex items-center space-x-4 mb-6">
              <button
                onClick={() => setShowChat(false)}
                className="text-red-500 hover:text-red-600 bg-white focus:outline-none"
                aria-label="Back to donor list"
              >
                ← Back
              </button>
              <img src={'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Default_pfp.svg/2048px-Default_pfp.svg.png'} alt={selectedUser.name} className="w-12 h-12 rounded-full object-cover" />
              <h2 className="text-xl font-semibold">{selectedUser.name}</h2>
            </div>
            <div className="h-96 overflow-y-auto mb-4 p-4 bg-gray-100 rounded-lg">
              {chatlist.length > 0 ? (chatlist.map((item, index) => (
                <div key={index} className={`mb-2 ${item.senderUid == myUid ? 'text-end': 'text-start'}`}>
                  <span className={`inline-block p-2 rounded-lg ${item.senderUid === myUid ? 'bg-blue-600 text-white' : 'bg-gray-300'}`}>
                    {item.message}
                    <h3 className='text-sm'>{moment(item.createdAt).startOf('seconds').fromNow()}</h3>
                  </span>
                </div>)
              )):(<p className='text-3xl text-center font-semibold text-white'>No chats...</p>)
            }
            </div>
            <div className="flex space-x-2">
              <input
                type="text"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Type your message..."
                className="flex-grow p-2 rounded-full border focus:outline-none focus:ring-2 focus:ring-red-500"
              />
              <button
                onClick={sendMsg}
                className="bg-red-500 text-white p-2 rounded-full hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50"
                aria-label="Send message"
              >
                <FaPaperPlane />
              </button>
              <button
                className="bg-gray-200 text-gray-600 p-2 rounded-full hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-opacity-50"
                aria-label="Attach file"
              >
                <FaPaperclip />
              </button>
              <button
                className="bg-gray-200 text-gray-600 p-2 rounded-full hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-opacity-50"
                aria-label="Insert emoji"
              >
                <FaSmile />
              </button>
            </div>
          </div>
        )}
      </main>
      </div>
      <Footer/>
    </div>
  );
}
export default Home;