if(confirm("Ready?")==1)
{
    gameScene();
}else{
    alert("Bye!");
}

function gameScene()
{
    var x=-25,y=0,size=20;
    var move = 25;
    var sX= sY= 2;//Shadow Size
    var sColor = "#00EE76";//Snake Color
    var map=[];
    var t =1;
    var canvas = document.getElementById("playground");
    var ctx = canvas.getContext("2d");
    var direction = 4;
    var time = 200;
    var pos1 = pos2 =0;

    interval = window.setInterval(snakeMove, time);
    function snakeMove()
    {
        switch(direction){
            case 2:x -=move;break;
            case 1:y -=move;break;
            case 4:x +=move;break;
            case 3:y +=move;break;
        }

        if(x<0 || x> 775 || y >425 || y<0)
        {
            alert("U R Dead!");
            window.location.reload();
        }
        for(i=0;i<map.length;i++)
        {
            if( parseInt(map[i].x)==x && parseInt(map[i].y) == y)
            {
                alert("U R Dead!");
                window.location.reload();
            }

        }
        if (map.length>t) {
            var cl = map.shift();
            ctx.clearRect(cl['x'], cl['y'], size+5, size+5);//Remove the rect and shadow.+1 sounds interesting
        }
        map.push({'x':x,'y':y});
        ctx.shadowColor = "#7f7f7f";
        ctx.shadowOffsetX = sX;
        ctx.shadowOffsetY = sY;
        ctx.shadowBlur = 2;
        ctx.fillStyle = sColor;
        ctx.fillRect(x,y,size,size);
        if(pos1 == x && pos2 == y)
        {
            apple();
            document.getElementById("score").innerText ++;
            t++;
        }
    }
    apple();
    function apple()
    {
        pos1 = Math.ceil(Math.random()*31)*25;
        pos2 = Math.ceil(Math.random()*17)*25;
        ctx.fillStyle = "#ff6347";
        ctx.shadowColor = "#7f7f7f";
        ctx.shadowOffsetX = sX;
        ctx.shadowOffsetY = sY;
        ctx.shadowBlur = 2;
        ctx.fillRect(pos1,pos2,size,size);
    }

    document.onkeydown = function(e)
    {
        key = e.keyCode-37;
        if((key+direction)!= 4)
        {
            switch (key)
            {
                case 0 : direction = 2; break;
                case 1 : direction = 1; break;
                case 2 : direction = 4; break;
                case 3 : direction = 3; break;
            }
        }

    }
}