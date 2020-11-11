const token = 'H48kKVj4z4eRe5KzoFUVSVa1iFj3rJsZdTXrIo418I1Nn8xMvRLmwq39LyWQ';
const url = 'https://challenge.thef2e.com/api/thef2e2019/stage6/';
const name = document.querySelector('.info--room-infomation');
const price = document.querySelector('.info--room-price');
const imgLeft = document.querySelector('.info__header--left');
const imgRT = document.querySelector('.info__header--right-top');
const imgRB = document.querySelector('.info__header--right-button');

const getUrl = new URL(location.href)
const roomid = getUrl.searchParams.get('roomid')
console.log(roomid);
let details =[];
const getData = ()=>{
    axios.defaults.headers.common.Authorization = `Bearer ${token}`
    axios.get(url+'room/'+`${roomid}`)
        .then((res)=>{
            details = res.data.room[0]
            descriptionShort = details.descriptionShort
            console.log(res)
            console.log(details)
            console.log(details.imageUrl[0])
            render()
        })
}
getData();
function render(){
    strName = `
    <h2 class='info--room-name'>${details.name}
        </h2>
        <p class='room--people-limit room--infos'>房客人數限制： ${descriptionShort.GuestMin}~${descriptionShort.GuestMax} 人</p>
        <p class='room--bed-type room--infos'>床型：${descriptionShort.Bed[0]}</p>
        <p class='room--bath-num room--infos'>衛浴數量： ${descriptionShort['Private-Bath']} 間</p>
        <p class='room--room-size room--infos'>房間大小： ${descriptionShort.Footage} 平方公尺</p>
        <p class='room--type-info'>
          ${details.description}
        </p>
        <h5 class="border_decoretion">＼＼＼
        </h5>
        <div class="room--check-group">
          <div class="checkIn-group">
            <h3>Check In</h3>
            <h4>15:00　−　21:00</h3>
          </div>
          <div class="checkOut-group">
            <h3>Check Out</h3>
            <h4>10:00</h3>
          </div>`
    strPrice = ` <h3 class='normal-day-peice'>NT.${details.normalDayPrice}</h3>
    <p class='day-info normal-day'>平日(一~四)</p>
    <h4 class="weekend-day-price">NT.${details.holidayPrice}</h4>
    <p class="day-info weekend-day">假日(五~日)</p>`
    name.innerHTML = strName;
    price.innerHTML = strPrice;
    changeimg()
};
function changeimg(){
    imgLeft.style['background-image'] = `url(${details.imageUrl[0]})`
    imgRT.style['background-image'] = `url(${details.imageUrl[1]})`
    imgRB.style['background-image'] = `url(${details.imageUrl[2]})`
}

// form
const inputName = document.getElementById('name');
const inputPhone = document.getElementById('phone');
const btn = document.getElementById('btn');
const booking = {
    name:'',
    tel:'',
    date:[]
}

function Select(){
    // if(inputName.value === '' || inputPhone.value === ''){
    //     console.log('請填寫正確資料')
    // }else{
    //     booking.name = inputName.value;
    //     booking.phone = inputPhone.value;
    //     axios.defaults.headers.common.Authorization = `Bearer ${token}`
    //     axios.post(url+'room/'+`${roomid}`,{
    //         name:'sss',
    //         phone:'aaa',
    //         data:['2020-01-01']
    //     })
    //     .then((res)=>{
    //         // alert('預約成功')
    //         console.log('OK')
    //         console.log(booking.name)
    //         console.log(res.data)
    //     })
    // }
    
        // booking.date = ["2019-10-01"];
        // e.preventDefault()


        // booking.name = inputName.value;
        // booking.tel = inputPhone.value;
        // axios.defaults.headers.common.Authorization = `Bearer ${token}`
        // axios.post(url+'room/'+`${roomid}`,booking)
        // .then((res)=>{
        //     // alert('預約成功')
        //     console.log('OK')
        //     console.log(booking.name)
        //     console.log(res.data)
        // })
        // .catch((error)=>{
        //     console.log(error)
        // })
}
// btn.addEventListener('click',Select);

function Test() {
    booking.name = inputName.value;
    booking.tel = inputPhone.value;
    axios.defaults.headers.common.Authorization = `Bearer ${token}`
    axios.post(url+'room/'+`${roomid}`,booking)
    .then((res)=>{
        // alert('預約成功')
        console.log('OK')
        console.log(booking.name)
        console.log(res.data)
    })
return true;
}