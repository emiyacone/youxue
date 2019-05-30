
Page({
  data: {
    money:0,
    backurl: '/pages/images/backimage.png',
    moneys: [{
      id:0,
      money:6,
      month:1,
      bordercolor:'grey',
      color:'black'
    }, 
    {
      id: 1,
      money: 30,
      month: 5,
      bordercolor: 'grey',
      color: 'black'
    }, 
    {
      id: 2,
      money: 68,
      month: 12,
      bordercolor: 'grey',
      color: 'black'
    },
    {
      id: 3,
      money: 108,
      month: 18,
      bordercolor: 'grey',
      color: 'black'
    },
    {
      id: 4,
      money: 268,
      month: 45,
      bordercolor: 'grey',
      color: 'black'
    },
    {
      id: 5,
      money: 698,
      month: 120,
      bordercolor: 'grey',
      color: 'black'
    }
    ]
  },
  changecolor:function(e){
    // var Index = e.currentTarget.dataset.index;
     var moneys=this.data.moneys;
     var id=e.currentTarget.id;
     var that=this;
     for(var i=0;i<6;i++)
     {
       if(i==id)
       {
       moneys[id].color = '#d0312b';
       moneys[id].bordercolor = '#d0312b';
       }
       else
       {
         moneys[i].color = 'black';
         moneys[i].bordercolor = 'grey';
       }

     }
    moneys[id].color ='#d0312b';
    moneys[id].bordercolor = '#d0312b';
    that.setData({
        money:moneys[id].money,
        moneys:moneys
     });
  },
})