import {createStore} from 'vuex'

export default createStore({
    state: {
        tagsList: [],
        collapse: false,
        obj:[
          {
            name: '带泪的鱼',
            writer: '带泪的鱼(戴丽丽)',
            id: 1,
            tu: '1.jpg',
            music: 'QQyinyue/nizou.mp3',
            userwriter: true,
            standof: 'Hey Mama'
          },
          {
            name: 'Lifestyle(抖音热曲)',
            writer: '国民好洲道',
            id: 2,
            tu: '2.jpg',
            music: 'QQyinyue/1.mp3',
            userwriter: true,
            standof: '光的方向'
          },
          {
            name: '美丽的神话',
            writer: '男辰',
            id: 3,
            tu: '3.png',
            music: 'QQyinyue/2.mp3',
            userwriter: true,
            standof: '她的眼睛会唱歌'
          },
          {
            name: '别错过',
            writer: '程jiajia',
            id: 4,
            tu: '4.png',
            music: 'QQyinyue/3.mp3',
            userwriter: true,
            standof: '孤苦伶仃'
          },
          {
            name: '坏女孩',
            writer: '徐良/小凌',
            id: 5,
            tu: '5.png',
            music: 'QQyinyue/4.mp3',
            userwriter: true,
            standof: '那个女孩'
          },
          {
            name: 'Nemesis',
            writer: 'Ryllz',
            id: 6,
            tu: '3.png',
            music: 'QQyinyue/5.mp3',
            userwriter: true,
            standof: '如果你也听说'
          }
        ],
        obj1:[],
    },
    mutations: {
        delTagsItem(state, data) {
            state.tagsList.splice(data.index, 1);
        },
        setTagsItem(state, data) {
            state.tagsList.push(data)
        },
        clearTags(state) {
            state.tagsList = []
        },
        closeTagsOther(state, data) {
            state.tagsList = data;
        },
        closeCurrentTag(state, data) {
            for (let i = 0, len = state.tagsList.length; i < len; i++) {
                const item = state.tagsList[i];
                if (item.path === data.$route.fullPath) {
                    if (i < len - 1) {
                        data.$router .push(state.tagsList[i + 1].path);
                    } else if (i > 0) {
                        data .$router.push(state.tagsList[i - 1].path);
                    } else {
                        data.$router.push("/");
                    }
                        state.tagsList.splice(i, 1);
                    break;
                }
            }
        },
        // 侧边栏折叠
        handleCollapse(state, data) {
            state.collapse = data;
        },
        sendobj(state,obj1){
          state.obj1.push(obj1)
          state.obj1=[...new Set(state.obj1)]
          console.log(state.obj1)
        },
        sendobjj(state,obj2){
          console.log(obj2,'4444')
          state.obj1=state.obj1.filter(item=>
             item.id!=obj2.id
          )
          console.log(state.obj1,324333)
        },
        dele(state,items){
          state.obj.forEach(item=>{
           if(item.id==items.id){
             item.userwriter=true
           }
         })

        }
    },
    actions: {},
    modules: {}
})