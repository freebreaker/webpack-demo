  






  var $=require('jquery')

  function _Loadmore($btn){
    this.$btn = $btn;
    this.fragment = [];
    this.curIndex = 0;
    this.ajaxNews();
  }

  _Loadmore.prototype.ajaxNews= function(){
        var _this =this;
        $.ajax({
        url: "/loadmore",//json文件位置
        type: "GET",//请求方式为get
        dataType: "JSON", 
        success: function(ret){
                if (ret.status===0&&!isOver) {
                  //如果数据到来了，然后....
                appendHtml(ret.data)
                pageIndex++
                lock=true; //当数据来临完毕的时候，再设为true，下次用户点击时正常
            }else{
              return
            }
        },
        error:function(){
          alert('出错')
        }
      })
  }



      function appendHtml(newsData){
            if (newsData.length===0) {
              isOver=true;
              $('#ct').append('<p>没有更多数据了</p>')
              return 
            }

            var htmls=''
            $.each(newsData, function(){
              htmls += '<li>';
              htmls += '<img src="' + this.img +'">';
              htmls += '<p>'+this.title+'</p>';
              htmls += '</li>';
            })

            $('#ct').append(htmls);
        }

        
    module.exports=_Loadmore







