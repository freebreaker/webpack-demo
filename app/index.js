

import Carousel from '../src/js/com/carousel.js'
import goTop from '../src/js/com/goTop.js'
import exposure from '../src/js/com/exposure.js'
import $ from 'jquery'
import _Loadmore from '../src/js/com/loadmore.js'

    // goTop=require('../src/js/com/goTop.js'),
    // exposure=require('../src/js/com/exposure.js'),
    // _Loadmore=require('../src/js/com/loadmore.js'),
    // $=require('jquery');

import '../src/css/task15.css'


Carousel.init($('.carousel'));

new goTop($('body'));

exposure.init($('.timeline-img img'),function($img){
    var imgUrl = $img.attr('data-src');
    $img.attr('src', imgUrl);
})

    // 点击加载更多数据
var $loadmore=$('#loadmore'),
    $ct=$('#ct'),
    pageIndex=0,
    isOver=false


$loadmore.on('click',function(){
        var lock=false;
        $.ajax({
            type: "GET",
            url: "/loadmore",
            data:{
                index:pageIndex,
                length:5
            },
            dataType: "JSON",
            success:function(ret){
                if (ret.status===0&&!isOver) {
                    appendHtml(ret.data)
                    pageIndex++
                    lock=true;
                }else{
                    return
                }
            },
            error:function(){
                alert('出错')
            }
        });
    })


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

  



