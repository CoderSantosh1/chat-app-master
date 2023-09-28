export const data={
  contactsOrGroupsList:[
    //---------1-------------------
    { 
      isGroup:false,
      contactOrGroupId:1, //userId
      contactOrGroupName:'Anil',
      mobileNumber:'9893567476',  //admin mobile number or user/contact number
      profilePict:require('./assets/anil.jpg'),
      lastChat:{
        text:"Hello how are you...",  
        date:"05/08/2023",
        time:"10:00 am"
      },
      group:null
    },

    //---------2-----------------
    {
      isGroup:true,
      contactOrGroupId:2,
      contactOrGroupName:'Java Training',
      //mobileNumber:null, 
      profilePict:require('./assets/java.jpg'),
      lastChat:{
        text:"Training schedule on 12 am...",
        date:"03/08/2023",
        time:"10:00 am"
      },
      groupAdmins:[{name:"Premnarayan",mobile:'9301511759',profilePic:require('./assets/prem.jpg')}],
      lastActiveUser:[{name:"Ankit",mobile:'4204204201',profilePic:require('./assets/ankit.jpg')}]
    },

    //----------3-------------------
    {
      isGroup:false,
      contactOrGroupId:3,
      contactOrGroupName:'Akash',
      mobileNumber:'8463784838',   //admin mobile number or user/contact number
      profilePict:require('./assets/akash.jpg'),
      lastChat:{
        text:"ok sir i am ready to join...",
        date:"01/08/2023",
        time:"11:00 am"
      },
      //group:null,
    },

    //-------4-----------------
    {
      isGroup:true,
      contactOrGroupId:4,
      contactOrGroupName:'Full stack web',
      // mobileNumber:null, 
      profilePict:require('./assets/fullstack.png'),
      lastChat:{
        text:"hello! how are yo students...?",
        date:"02/08/2023",
        time:"09:00 am"
      },
      groupAdmins:[{name:"Premnarayan",mobile:'9301511759',profilePic:require('./assets/prem.jpg')}],
      lastActiveUser:[{name:"Anil",mobile:'9893567476',profilePic:require('./assets/anil.jpg')}]
    },
     //-------5-----------------
     {
      isGroup:true,
      contactOrGroupId:5,
      contactOrGroupName:'Placement Cell',
      // mobileNumber:null, 
      profilePict:require('./assets/myPhoto.jpg'),
      lastChat:{
        text:"hello! all candidate send Your Resume",
        date:"02/08/2023",
        time:"09:00 am"
      },
      groupAdmins:[{name:"Premnarayan",mobile:'9301511759',profilePic:require('./assets/prem.jpg')}],
      lastActiveUser:[{name:"Akash",mobile:'8463784838',profilePic:require('./assets/akash.jpg')}]
    },
    //-------6-----------------
    {
      isGroup:false,
      contactOrGroupId:6,
      contactOrGroupName:'Deeksha',
      mobileNumber:'7578474884',   //admin mobile number or user/contact number
      profilePict:require('./assets/deeksha.jpg'),
      lastChat:{
        text:"join google meet tody!",
        date:"01/08/2023",
        time:"11:00 am"
      },
      //group:null,
    },
    //-------7-----------------
    {
      isGroup:false,
      contactOrGroupId:7,
      contactOrGroupName:'Ankit',
      mobileNumber:'7588685994',   //admin mobile number or user/contact number
      profilePict:require('./assets/ankit.jpg'),
      lastChat:{
       text:"You can join Forever,can you interested",
         date:"01/08/2023",
        time:"11:00 am"
      },
      //group:null,
    },

     //-------8-----------------
     {
      isGroup:false,
      contactOrGroupId:8,
      contactOrGroupName:'ravi',
      mobileNumber:'556667666',   //admin mobile number or user/contact number
      profilePict:require('./assets/ravi.jpg'),
      lastChat:{
        text:"hi how are you",
        date:"01/08/2023",
        time:"11:00 am"
      },
      //group:null,
    },

    //-------9-----------------
    {
      isGroup:false,
      contactOrGroupId:9,
      contactOrGroupName:'Raksha',
      mobileNumber:'8899987889',   //admin mobile number or user/contact number
      profilePict:require('./assets/raksha.jpg'),
      lastChat:{
        text:"happy birthday",
        date:"01/08/2023",
        time:"11:00 am"
      },
      //group:null,
    },

    //-------10-----------------
    {
      isGroup:false,
      contactOrGroupId:10,
      contactOrGroupName:'Rohit',
      mobileNumber:'78888778',   //admin mobile number or user/contact number
      profilePict:require('./assets/rohit.jpg'),
      lastChat:{
        text:" Congratulation",
        date:"01/08/2023",
        time:"11:00 am"
      },
      //group:null,
    },
  ],

  //==============chatLists=========================
  chatsListOfList:[
    //---------1-------------------
    {
      contactOrGroupId:1,
      chatsLists:[
        {
          isMyMessage:false,
          senderName:"Anil",
          mobileNumber:'9893567476',
          senderPict:require('./assets/anil.jpg'),
          date:'31/07/2023',
          time:'03:00 PM',
          content:"How are you?  i see you long time comes online",
          contentType:"text",
          chatId:1
        },
        {
          isMyMessage:false,
          senderName:"Anil",
          mobileNumber:'9893567476',
          senderPict:require('./assets/anil.jpg'),
          date:'31/07/2023',
          time:'03:00 PM',
          content:require('./assets/ankit.jpg'),
          contentType:"img",
          chatId:2
        },
        {
          isMyMessage:false,
          senderName:"Anil",
          mobileNumber:'9893567476',
          senderPict:require('./assets/anil.jpg'),
          date:'31/07/2023',
          time:'03:00 PM',
          content:require('./assets/anil.jpg'),
          contentType:"img",
          chatId:3
        },
        {
          isMyMessage:true,
          senderName:"Premnarayan",
          mobileNumber:'9301511759',
          senderPict:require('./assets/prem.jpg'),
          date:'31/07/2023',
          time:'03:01 PM',
          content:"i am fine? where are you working......?",
          contentType:"text",
          chatId:4
        },
        {
          isMyMessage:false,
          senderName:"Anil",
          mobileNumber:'9893567476',
          senderPict:require('./assets/anil.jpg'),
          date:'31/07/2023',
          time:'03:01 PM',
          content:"i am  in bangluru,working as a full stack developer?",
          contentType:"text",
          chatId:3
        },
        {
          isMyMessage:true,
          senderName:"Premnarayan",
          mobileNumber:'9301511759',
          senderPict:require('./assets/prem.jpg'),
          date:'31/07/2023',
          time:'03:01 PM',
          content:"Now i am working on  skill test , but can you guide me in my chat app to Make the redux data persistent such that after refresh, the messages and conversations are intact.",
          contentType:"text",
          chatId:5
        },
        {
          isMyMessage:false,
          senderName:"Anil",
          mobileNumber:'9893567476',
          senderPict:require('./assets/ankit.jpg'),
          date:'31/07/2023',
          time:'03:01 PM',
          content:" why not? sure i guide you",
          contentType:"text",
          chatId:6
        },
        {
          isMyMessage:false,
          senderName:"Anil",
          mobileNumber:'9893567476',
          senderPict:require('./assets/anil.jpg'),
          date:'31/07/2023',
          time:'03:01 PM',
          content:" Ok .",
          contentType:"text",
          chatId:7
        }

     ]
    },

    //-------------2------------------------------
    {
      contactOrGroupId:2,
      chatsLists:[
        {
          isMyMessage:false,
          senderName:"Anil",
          mobileNumber:'9893567476',
          senderPict:require('./assets/anil.jpg'),
          date:'31/07/2023',
          time:'03:00 PM',
          content:"Sir what is next task for everyone",
          contentType:"text",
          chatId:8
        },
        {
          isMyMessage:true,
          senderName:"Premnarayan",
          mobileNumber:'9301511759',
          senderPict:require('./assets/prem.jpg'),
          date:'31/07/2023',
          time:'03:01 PM',
          content:"i am fine? send your colorful photos everyOne",
          contentType:"text",
          chatId:9
        },
        {
          isMyMessage:false,
          senderName:"ankit",
          mobileNumber:'7588685994',
          senderPict:require('./assets/ankit.jpg'),
          date:'31/07/2023',
          time:'03:00 PM',
          content:"ok sir ,i send you just one minutes",
          contentType:"text",
          chatId:10
        },
        {
          isMyMessage:false,
          senderName:"ankit",
          mobileNumber:'7588685994',
          senderPict:require('./assets/ankit.jpg'),
          date:'31/07/2023',
          time:'03:01 PM',
          content:require('./assets/ankit.jpg'),
          contentType:"img",
          chatId:11
        },
        {
          isMyMessage:false,
          senderName:"Anil",
          mobileNumber:'9893567476',
          senderPict:require('./assets/anil.jpg'),
          date:'31/07/2023',
          time:'03:02 PM',
          content:require('./assets/anil.jpg'),
          contentType:"img",
          chatId:12
        },
        {
          isMyMessage:false,
          senderName:"Deksha",
          mobileNumber:'7578474884',
          senderPict:require('./assets/deeksha.jpg'),
          date:'31/07/2023',
          time:'03:05 PM',
          content:require('./assets/deeksha.jpg'),
          contentType:"img",
          chatId:13
        },
        {
          isMyMessage:true,
          senderName:"Premnarayan",
          mobileNumber:'9301511759',
          senderPict:require('./assets/prem.jpg'),
          date:'31/07/2023',
          time:'03:01 PM',
          content:"nice",
          contentType:"text",
          chatId:14
        },
     ]
    },

    //---------3-------------------
    {

      contactOrGroupId:3,
      chatsLists:[
        {
          isMyMessage:false,
          senderName:"Akash",
          mobileNumber:'8463784838',
          senderPict:require('./assets/akash.jpg'),
          date:'30/07/2023',
          time:'03:00 PM',
          content:"How are you?",
          contentType:"text",
          chatId:15
        },
        {
          isMyMessage:true,
          senderName:"Premnarayan",
          mobileNumber:'9301511759',
          senderPict:require('./assets/prem.jpg'),
          date:'30/07/2023',
          time:'03:02 PM',
          content:"i am fine?",
          contentType:"text",
          chatId:16
        },
        {
          isMyMessage:false,
          senderName:"Akash",
          mobileNumber:'8463784838',
          senderPict:require('./assets/akash.jpg'),
          date:'30/07/2023',
          time:'03:00 PM',
          content:require('./assets/akash.jpg'),
          contentType:"img",
          chatId:17
        },
        {
          isMyMessage:true,
          senderName:"Premnarayan",
          mobileNumber:'9301511759',
          senderPict:require('./assets/prem.jpg'),
          date:'30/07/2023',
          time:'03:02 PM',
          content:"nice",
          contentType:"text",
          chatId:18
        },
        {
          isMyMessage:true,
          senderName:"Premnarayan",
          mobileNumber:'9301511759',
          senderPict:require('./assets/prem.jpg'),
          date:'30/07/2023',
          time:'03:02 PM',
          content:"i send you Raksha pickture ok",
          contentType:"text",
          chatId:19
        },
        {
          isMyMessage:true,
          senderName:"Premnarayan",
          mobileNumber:'9301511759',
          senderPict:require('./assets/prem.jpg'),
          date:'30/07/2023',
          time:'03:02 PM',
          content:require('./assets/raksha.jpg'),
          contentType:"img",
          chatId:20
        }
     ]
    },

    //---------4-------------------
    {
      contactOrGroupId:4,
      chatsLists:[
        {
          isMyMessage:false,
          senderName:"Anil",
          mobileNumber:'9893567476',
          senderPict:require('./assets/anil.jpg'),
          date:'31/07/2023',
          time:'03:00 PM',
          content:"Sir what is next task for everyone",
          contentType:"text",
          chatId:21
        },
        {
          isMyMessage:true,
          senderName:"Premnarayan",
          mobileNumber:'9301511759',
          senderPict:require('./assets/prem.jpg'),
          date:'31/07/2023',
          time:'03:01 PM',
          content:"i am fine? send your colorful photos everyOne",
          contentType:"text",
          chatId:22
        },
        {
          isMyMessage:false,
          senderName:"ankit",
          mobileNumber:'7588685994',
          senderPict:require('./assets/ankit.jpg'),
          date:'31/07/2023',
          time:'03:00 PM',
          content:"ok sir ,i send you just one minutes",
          contentType:"text",
          chatId:23
        },
        {
          isMyMessage:false,
          senderName:"ankit",
          mobileNumber:'7588685994',
          senderPict:require('./assets/ankit.jpg'),
          date:'31/07/2023',
          time:'03:01 PM',
          content:require('./assets/ankit.jpg'),
          contentType:"img",
          chatId:24
        },
        {
          isMyMessage:false,
          senderName:"Anil",
          mobileNumber:'9893567476',
          senderPict:require('./assets/anil.jpg'),
          date:'31/07/2023',
          time:'03:02 PM',
          content:require('./assets/anil.jpg'),
          contentType:"img",
          chatId:25
        },
        {
          isMyMessage:false,
          senderName:"Deksha",
          mobileNumber:'7578474884',
          senderPict:require('./assets/deeksha.jpg'),
          date:'31/07/2023',
          time:'03:05 PM',
          content:require('./assets/deeksha.jpg'),
          contentType:"img",
          chatId:26
        },
        {
          isMyMessage:true,
          senderName:"Premnarayan",
          mobileNumber:'9301511759',
          senderPict:require('./assets/prem.jpg'),
          date:'31/07/2023',
          time:'03:01 PM',
          content:"nice",
          contentType:"text",
          chatId:27
        },
        {
          isMyMessage:false,
          senderName:"Raksha",
          mobileNumber:'8899987889',
          senderPict:require('./assets/raksha.jpg'),
          date:'31/07/2023',
          time:'03:05 PM',
          content:require('./assets/raksha.jpg'),
          contentType:"img",
          chatId:28
      },
    ],
  },

  //---------5-------------------
  {
    contactOrGroupId:5,
    chatsLists:[
      {
        isMyMessage:false,
        senderName:"Anil",
        mobileNumber:'9893567476',
        senderPict:require('./assets/anil.jpg'),
        date:'31/07/2023',
        time:'03:00 PM',
        content:"Sir what is next task for everyone",
        contentType:"text",
        chatId:29
      },
      {
        isMyMessage:true,
        senderName:"Premnarayan",
        mobileNumber:'9301511759',
        senderPict:require('./assets/prem.jpg'),
        date:'31/07/2023',
        time:'03:01 PM',
        content:"i am fine? send your colorful photos everyOne",
        contentType:"text",
        chatId:30
      },
      {
        isMyMessage:false,
        senderName:"ankit",
        mobileNumber:'7588685994',
        senderPict:require('./assets/ankit.jpg'),
        date:'31/07/2023',
        time:'03:00 PM',
        content:"ok sir ,i send you just one minutes",
        contentType:"text",
        chatId:31
      },
      {
        isMyMessage:false,
        senderName:"ankit",
        mobileNumber:'7588685994',
        senderPict:require('./assets/ankit.jpg'),
        date:'31/07/2023',
        time:'03:01 PM',
        content:require('./assets/ankit.jpg'),
        contentType:"img",
        chatId:32
      },
      {
        isMyMessage:false,
        senderName:"Anil",
        mobileNumber:'9893567476',
        senderPict:require('./assets/anil.jpg'),
        date:'31/07/2023',
        time:'03:02 PM',
        content:require('./assets/anil.jpg'),
        contentType:"img",
        chatId:33
      },
      {
        isMyMessage:false,
        senderName:"Deksha",
        mobileNumber:'7578474884',
        senderPict:require('./assets/deeksha.jpg'),
        date:'31/07/2023',
        time:'03:05 PM',
        content:require('./assets/deeksha.jpg'),
        contentType:"img",
        chatId:34
      },
      {
        isMyMessage:true,
        senderName:"Premnarayan",
        mobileNumber:'9301511759',
        senderPict:require('./assets/prem.jpg'),
        date:'31/07/2023',
        time:'03:01 PM',
        content:"nice",
        contentType:"text",
        chatId:35
      },
      {
        isMyMessage:false,
        senderName:"Raksha",
        mobileNumber:'8899987889',
        senderPict:require('./assets/raksha.jpg'),
        date:'31/07/2023',
        time:'03:05 PM',
        content:require('./assets/raksha.jpg'),
        contentType:"img",
        chatId:36
    },
  ],
},

  
//---------6-------------------
{

  contactOrGroupId:6,
  chatsLists:[
    {
      isMyMessage:false,
      senderName:"Deeksha",
      mobileNumber:'7578474884',
      senderPict:require('./assets/deeksha.jpg'),
      date:'30/07/2023',
      time:'03:00 PM',
      content:"How are you?",
      contentType:"text",
      chatId:37
    },
    {
      isMyMessage:true,
      senderName:"Premnarayan",
      mobileNumber:'9301511759',
      senderPict:require('./assets/prem.jpg'),
      date:'30/07/2023',
      time:'03:02 PM',
      content:"i am fine?",
      contentType:"text",
      chatId:38
    },
    {
      isMyMessage:false,
      senderName:"Deeksha",
      mobileNumber:'7578474884',
      senderPict:require('./assets/deeksha.jpg'),
      date:'30/07/2023',
      time:'03:00 PM',
      content:require('./assets/deeksha.jpg'),
      contentType:"img",
      chatId:39
    },
    {
      isMyMessage:true,
      senderName:"Premnarayan",
      mobileNumber:'9301511759',
      senderPict:require('./assets/prem.jpg'),
      date:'30/07/2023',
      time:'03:02 PM',
      content:"nice",
      contentType:"text",
      chatId:40
    },
    {
      isMyMessage:true,
      senderName:"Premnarayan",
      mobileNumber:'9301511759',
      senderPict:require('./assets/prem.jpg'),
      date:'30/07/2023',
      time:'03:02 PM',
      content:"i send you rohit pickture ok",
      contentType:"text",
      chatId:41
    },
    {
      isMyMessage:true,
      senderName:"Premnarayan",
      mobileNumber:'9301511759',
      senderPict:require('./assets/prem.jpg'),
      date:'30/07/2023',
      time:'03:02 PM',
      content:require('./assets/rohit.jpg'),
      contentType:"img",
      chatId:42
    }
 ]
},

//---------7-------------------
{

  contactOrGroupId:7,
  chatsLists:[
    {
      isMyMessage:false,
      senderName:"Ankit",
      mobileNumber:'7588685994',
      senderPict:require('./assets/ankit.jpg'),
      date:'30/07/2023',
      time:'03:00 PM',
      content:"How are you?",
      contentType:"text",
      chatId:43
    },
    {
      isMyMessage:true,
      senderName:"Premnarayan",
      mobileNumber:'9301511759',
      senderPict:require('./assets/prem.jpg'),
      date:'30/07/2023',
      time:'03:02 PM',
      content:"i am fine?",
      contentType:"text",
      chatId:44
    },
    {
      isMyMessage:false,
      senderName:"Ankit",
      mobileNumber:'7588685994',
      senderPict:require('./assets/ankit.jpg'),
      date:'30/07/2023',
      time:'03:00 PM',
      content:require('./assets/ankit.jpg'),
      contentType:"img",
      chatId:45
    },
    {
      isMyMessage:true,
      senderName:"Premnarayan",
      mobileNumber:'9301511759',
      senderPict:require('./assets/prem.jpg'),
      date:'30/07/2023',
      time:'03:02 PM',
      content:"nice",
      contentType:"text",
      chatId:46
    },
    {
      isMyMessage:true,
      senderName:"Premnarayan",
      mobileNumber:'9301511759',
      senderPict:require('./assets/prem.jpg'),
      date:'30/07/2023',
      time:'03:02 PM',
      content:"i send you Rohit Photo ok",
      contentType:"text",
      chatId:47
    },
    {
      isMyMessage:true,
      senderName:"Premnarayan",
      mobileNumber:'9301511759',
      senderPict:require('./assets/prem.jpg'),
      date:'30/07/2023',
      time:'03:02 PM',
      content:require('./assets/raksha.jpg'),
      contentType:"img",
      chatId:48
    },
    {
      isMyMessage:false,
      senderName:"Ankit",
      mobileNumber:'7588685994',
      senderPict:require('./assets/ankit.jpg'),
      date:'30/07/2023',
      time:'03:00 PM',
      content:"ok Dost",
      contentType:"text",
      chatId:49
    },
 ]
},

//---------8-------------------
{

  contactOrGroupId:8,
  chatsLists:[
    {
      isMyMessage:false,
      senderName:"Ravi",
      mobileNumber:'556667666',
      senderPict:require('./assets/ravi.jpg'),
      date:'30/07/2023',
      time:'03:00 PM',
      content:"How are you?",
      contentType:"text",
      chatId:50
    },
    {
      isMyMessage:true,
      senderName:"Premnarayan",
      mobileNumber:'9301511759',
      senderPict:require('./assets/prem.jpg'),
      date:'30/07/2023',
      time:'03:02 PM',
      content:"i am fine?",
      contentType:"text",
      chatId:51
    },
    {
      isMyMessage:false,
      senderName:"Ravi",
      mobileNumber:'556667666',
      senderPict:require('./assets/ravi.jpg'),
      date:'30/07/2023',
      time:'03:00 PM',
      content:require('./assets/ravi.jpg'),
      contentType:"img",
      chatId:52
    },
    {
      isMyMessage:true,
      senderName:"Premnarayan",
      mobileNumber:'9301511759',
      senderPict:require('./assets/prem.jpg'),
      date:'30/07/2023',
      time:'03:02 PM',
      content:"nice",
      contentType:"text",
      chatId:53
    },
    {
      isMyMessage:true,
      senderName:"Premnarayan",
      mobileNumber:'9301511759',
      senderPict:require('./assets/prem.jpg'),
      date:'30/07/2023',
      time:'03:02 PM',
      content:"i send you Raksha pickture ok",
      contentType:"text",
      chatId:54
    },
    {
      isMyMessage:true,
      senderName:"Premnarayan",
      mobileNumber:'9301511759',
      senderPict:require('./assets/prem.jpg'),
      date:'30/07/2023',
      time:'03:02 PM',
      content:require('./assets/raksha.jpg'),
      contentType:"img",
      chatId:55
    }
 ]
},

//---------9-------------------
{

  contactOrGroupId:9,
  chatsLists:[
    {
      isMyMessage:false,
      senderName:"Raksha",
      mobileNumber:'8899987889',
      senderPict:require('./assets/raksha.jpg'),
      date:'30/07/2023',
      time:'03:00 PM',
      content:"How are you?",
      contentType:"text",
      chatId:56
    },
    {
      isMyMessage:true,
      senderName:"Premnarayan",
      mobileNumber:'9301511759',
      senderPict:require('./assets/prem.jpg'),
      date:'30/07/2023',
      time:'03:02 PM',
      content:"i am fine?",
      contentType:"text",
      chatId:57
    },
    {
      isMyMessage:false,
      senderName:"Raksha",
      mobileNumber:'8899987889',
      senderPict:require('./assets/raksha.jpg'),
      date:'30/07/2023',
      time:'03:00 PM',
      content:require('./assets/raksha.jpg'),
      contentType:"img",
      chatId:58
    },
    {
      isMyMessage:true,
      senderName:"Premnarayan",
      mobileNumber:'9301511759',
      senderPict:require('./assets/prem.jpg'),
      date:'30/07/2023',
      time:'03:02 PM',
      content:"nice",
      contentType:"text",
      chatId:59
    },
    {
      isMyMessage:true,
      senderName:"Premnarayan",
      mobileNumber:'9301511759',
      senderPict:require('./assets/prem.jpg'),
      date:'30/07/2023',
      time:'03:02 PM',
      content:"i send you Ravi image ok",
      contentType:"text",
      chatId:60
    },
    {
      isMyMessage:true,
      senderName:"Premnarayan",
      mobileNumber:'9301511759',
      senderPict:require('./assets/prem.jpg'),
      date:'30/07/2023',
      time:'03:02 PM',
      content:require('./assets/ravi.jpg'),
      contentType:"img",
      chatId:61
    }
 ]
},

//---------10-------------------
{

  contactOrGroupId:10,
  chatsLists:[
    {
      isMyMessage:false,
      senderName:"Rohit",
      mobileNumber:'78888778',
      senderPict:require('./assets/rohit.jpg'),
      date:'30/07/2023',
      time:'03:00 PM',
      content:"How are you?",
      contentType:"text",
      chatId:62
    },
    {
      isMyMessage:true,
      senderName:"Premnarayan",
      mobileNumber:'9301511759',
      senderPict:require('./assets/prem.jpg'),
      date:'30/07/2023',
      time:'03:02 PM',
      content:"i am fine?",
      contentType:"text",
      chatId:63
    },
    {
      isMyMessage:false,
      senderName:"Rohit",
      mobileNumber:'78888778',
      senderPict:require('./assets/rohit.jpg'),
      date:'30/07/2023',
      time:'03:00 PM',
      content:require('./assets/rohit.jpg'),
      contentType:"img",
      chatId:64
    },
    {
      isMyMessage:true,
      senderName:"Premnarayan",
      mobileNumber:'9301511759',
      senderPict:require('./assets/prem.jpg'),
      date:'30/07/2023',
      time:'03:02 PM',
      content:"nice",
      contentType:"text",
      chatId:65
    },
    {
      isMyMessage:true,
      senderName:"Premnarayan",
      mobileNumber:'9301511759',
      senderPict:require('./assets/prem.jpg'),
      date:'30/07/2023',
      time:'03:02 PM',
      content:"i send you Raksha pickture ok",
      contentType:"text",
      chatId:66
    },
    {
      isMyMessage:true,
      senderName:"Premnarayan",
      mobileNumber:'9301511759',
      senderPict:require('./assets/prem.jpg'),
      date:'30/07/2023',
      time:'03:02 PM',
      content:require('./assets/raksha.jpg'),
      contentType:"img",
      chatId:67
    }
 ]
},

 ],

 //====================groupMemberList===============
 groupMembersList:[
  //--------1---------------------------------
  {
    groupId:2,
    members:[
      {
        contactName:'Anil',
        mobileNumber:'9893567476',
        profilePict:require('./assets/anil.jpg'),

      },
      {
        contactName:'Ankit',
        mobileNumber:'7588685994',
        profilePict:require('./assets/ankit.jpg'),
      },
      {
        contactName:'Deeksha',
        mobileNumber:'7578474884',
        profilePict:require('./assets/deeksha.jpg'),
      },

      {
        contactName:'Aksh',
        mobileNumber:'8463784838',
        profilePict:require('./assets/akash.jpg'),
      },
      {
        contactName:'Raksha',
        mobileNumber:'8899987889',
        profilePict:require('./assets/raksha.jpg'),
      },

    ]
  },

  //--------2---------------------------------
  {
    groupId:4,
    members:[
      {
        contactName:'Anil',
        mobileNumber:'9893567476',
        profilePict:require('./assets/anil.jpg'),

      },
      {
        contactName:'Ankit',
        mobileNumber:'7588685994',
        profilePict:require('./assets/ankit.jpg'),
      },
      {
        contactName:'Deeksha',
        mobileNumber:'7578474884',
        profilePict:require('./assets/deeksha.jpg'),
      },

      {
        contactName:'Aksh',
        mobileNumber:'8463784838',
        profilePict:require('./assets/akash.jpg'),
      },
      {
        contactName:'Raksha',
        mobileNumber:'8899987889',
        profilePict:require('./assets/raksha.jpg'),
      },

    ]
  },

  //--------3---------------------------------
  {
    groupId:5,
    members:[
      {
        contactName:'Anil',
        mobileNumber:'9893567476',
        profilePict:require('./assets/anil.jpg'),

      },
      {
        contactName:'Ankit',
        mobileNumber:'7588685994',
        profilePict:require('./assets/ankit.jpg'),
      },
      {
        contactName:'Deeksha',
        mobileNumber:'7578474884',
        profilePict:require('./assets/deeksha.jpg'),
      },

      {
        contactName:'Aksh',
        mobileNumber:'8463784838',
        profilePict:require('./assets/akash.jpg'),
      },
      {
        contactName:'Raksha',
        mobileNumber:'8899987889',
        profilePict:require('./assets/raksha.jpg'),
      },

    ]
  },
   
 ]

}