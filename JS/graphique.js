
//pour retourner le plus grand x1 et x2 pour dessin
function x1x2(variables,contraintes)
{
  var i = 1;
  var x1 = 0;
  var x2 = 0 ;
  if(eval(document.getElementById('x11').value) != 0)
    x1 = eval(document.getElementById('b1').value)/eval(document.getElementById('x11').value);
  if(eval(document.getElementById('x12').value) != 0)
    x2 = eval(document.getElementById('b1').value)/eval(document.getElementById('x12').value);
  while(i < contraintes)
  {
    var b = eval(document.getElementById('b'.concat((i+1).toString())).value);
    var x = eval(document.getElementById('x'.concat((i+1).toString(),'1')).value);
    var y = eval(document.getElementById('x'.concat((i+1).toString(),'2')).value);
    if(x1 < b/x && x != 0)
    {
      x1 = b/x;
    }
    if(x2 < b/y && y != 0)
    {
      x2 = b/y;
    }
    i++;
  }
  return [x1,x2]
}
//check si un point verifie tout les contraintes
function verifie_all(x1,y1,variables,contraintes)
{
  var i = 0;
  var b;
  var x;
  var y;
  var ct;
  while(i < contraintes)
  {
    b = eval(document.getElementById('b'.concat((i+1).toString())).value);
    ct = document.getElementById('contraint'.concat((i+1).toString())).value;
    x = eval(document.getElementById('x'.concat((i+1).toString(),'1')).value);
    y = eval(document.getElementById('x'.concat((i+1).toString(),'2')).value);
    if((eval(x*x1 +y*y1 - b) < 0) && (ct == '>=' || ct == '=' ))
      return (-1);
    if((eval(x*x1 +y*y1 - b) > 0) && (ct == '<=' || ct == '=' ))
      return (-1);
    i++;
  }
  return(1);
}
//peindre region admisible
function peindre(x1,x2,variables,contraintes)
{
	var i = 51;
	var j = 0;
	var ligne;
	var colom;
	var canv = document.getElementById('myCanvas');
	var ctx = canv.getContext("2d");
	while(i <= 1000)
	{
		j = 0;
		while(j <= 550)
		{
			ligne = (550-j)*(x2 / 500);
			colom = (x1 * (i - 50))/900;
			if(verifie_all(colom,ligne,variables,contraintes) == 1)
			{
				ctx.fillStyle = "#AD325F";
				ctx.fillRect(i,j,1,1);
			}
			j++;
		}
		i++;
	}
}
//les intersections
function intersection(variables,contraintes)
{
	var i = 0;
	var j;
	var x1;
	var x2;
	var y1;
	var y2;
	var b1;
	var b2;
	var array = Array();
	var x;
	var y;
	var t = 0;
	var c = 0;
	array[0] = Array();
	if(verifie_all(0,0,variables,contraintes) != -1)
	{
		array[0][0] = 0;
		array[0][1] = 0;
		t++;
		c = -1;
	}
	while(i < contraintes)
	{
		j = i + 1;
		b1 = eval(document.getElementById('b'.concat((i+1).toString())).value);
   		x1 = eval(document.getElementById('x'.concat((i+1).toString(),'1')).value);
    	y1 = eval(document.getElementById('x'.concat((i+1).toString(),'2')).value);

		while(j < contraintes)
		{
    		b2 = eval(document.getElementById('b'.concat((j+1).toString())).value);
    		x2 = eval(document.getElementById('x'.concat((j+1).toString(),'1')).value);
    		y2 = eval(document.getElementById('x'.concat((j+1).toString(),'2')).value);
    		if((x2*y1-x1*y2) != 0)
    		{
    			y = (x2 * b1 - x1 * b2)/(x2*y1-x1*y2);
    			x = (b1 - y*y1)/x1;
    			if(verifie_all(x,y,variables,contraintes) != -1 && x >= 0 && y >= 0)
    			{
    				array[t] = Array();
    				array[t][0] = x;
    				array[t][1] = y;
    				t++;
    			}
    		}
    		j++;
		}
		i++;
	}
	i = 0;
	while(i < contraintes)
	{
		b1 = eval(document.getElementById('b'.concat((i+1).toString())).value);
   		x1 = eval(document.getElementById('x'.concat((i+1).toString(),'1')).value);
    	y1 = eval(document.getElementById('x'.concat((i+1).toString(),'2')).value);
    	if(x1 > 0)
    	{
    		if(verifie_all(b1/x1,0,variables,contraintes) != -1)
    		{
    			array[t] = Array();
    			array[t][0] = b1/x1;
    			array[t][1] = 0;
    			t++;
    		}
    	}
    	if(y1 > 0)
    	{
    		if(verifie_all(0,b1/y1,variables,contraintes) != -1)
    		{
   		 		array[t] = Array();
    			array[t][0] = 0;
    			array[t][1] = b1/y1;
    			t++;
    		}
    	}
    	i++;
	}
	if(c == 0 && t == 0)
		return (-1);
	return(array);
}
//if exist
function in_array(array,array1)
{
	var i = 0;
	while(i < array.length)
	{
		if((array[i][0] == array1[0] && array[i][1] == array1[1]))
			return (1);
		i++;

	}
	return (0);

}
//Pour eliminer les duplicates et trier selon angle
function duplic_trie(array)
{
	var array1 = Array();
	array1[0] = Array();
	array1[0][0] = array[0][0];
	array1[0][1] = array[0][1];
	var i = 1;
	var t = 1;
	while(i < array.length)
	{
		if(in_array(array1,array[i]) == 0)
		{
			array1[t] = Array();
			array1[t][0] = array[i][0];
			array1[t][1] = array[i][1];
			t++;
		}
		i++;
	}
	i = 0;
	var temp;
	if(array1[0][0] == 0 && array1[0][1] == 0)
	{
		temp = 1;
	}
	else
	{
		temp = 0;
	}
	var i = temp;
	var j ;
	var x_min;
	var y_min;
	while(i < array1.length)
	{
		j = i + 1;
		while(j < array1.length)
		{

			if(array1[temp][0] == 0 && array1[j][0] != 0)
			{
				x_min = array1[j][0];
				y_min = array1[j][1];
				array1[j][0] = array1[temp][0];
				array1[j][1] = array1[temp][1];
				array1[temp][0] = x_min;
				array1[temp][1] = y_min;
			}
			else if(array1[j][0] != 0)
			{
				if((array1[temp][1])/(array1[temp][0]) > (array1[j][1])/(array1[j][0]))
				{
					x_min = array1[j][0];
					y_min = array1[j][1];
					array1[j][0] = array1[temp][0];
					array1[j][1] = array1[temp][1];
					array1[temp][0] = x_min;
					array1[temp][1] = y_min;
				}
			}
			j++;
		}
		temp++;
		i++;
	}
	return (array1);

}
//Pour solution graphique width 300 height 150
function draw(variables,contraintes,non_bor)
{
  var a = document.getElementById('racine');
  a.appendChild(document.createElement('br'));
  var b = document.createElement('canvas');
  b.setAttribute('id','myCanvas');
  b.setAttribute('width','1000');
  b.setAttribute('height','600');
  b.setAttribute('style','border:1px solid #d3d3d3;');
  var ctx = b.getContext("2d");
  a.appendChild(b);
  ctx.moveTo(50,0);
ctx.lineTo(50,600);
ctx.lineWidth = 2;
ctx.stroke();
ctx.moveTo(0,550);
ctx.lineTo(1000,550);
ctx.lineWidth = 1;
ctx.stroke();
  var x1_x2 = x1x2(variables,contraintes);
  var x1 = x1_x2[0];
  var x2 = x1_x2[1];
  if(x2 <= 0)
    x2 = 1;
  if(x1 <= 0)
    x1 = 1;
  var i = 0;
  while(i < contraintes)
  {
    var b1 = eval(document.getElementById('b'.concat((i+1).toString())).value);
    var x = eval(document.getElementById('x'.concat((i+1).toString(),'1')).value);
    var y = eval(document.getElementById('x'.concat((i+1).toString(),'2')).value);
    var xx = b1/x;
    var yy = b1/y;
    ctx.font = "20px Arial";
    if(xx > 0)
    {
      ctx.fillText(xx.toFixed(1).toString(),900*(xx/x1)+50,580);
      ctx.moveTo(900*(xx/x1)+50,547);
      ctx.lineTo(900*(xx/x1)+50,553);
      ctx.lineWidth = 1;
      ctx.stroke();
    }
    if(yy > 0)
    {
      ctx.fillText(yy.toFixed(1).toString(),26,50 + (500 - 500 * (yy/x2)));
      ctx.moveTo(53,50 + (500 - 500 * (yy/x2)));
      ctx.lineTo(47,50 + (500 - 500 * (yy/x2)));
      ctx.lineWidth = 1;
      ctx.stroke();
    }
    if(xx > 0 && yy < 0)
    {
      var colone ;
      colone = (1000-50/900)*x1;
      var ligne = parseFloat(b1 - x*colone)/parseFloat(y);
      ctx.moveTo(900*(xx/x1)+50,550);
      ctx.lineTo(1000,50 + (500 - 500 * parseFloat(ligne/x2)));
      ctx.lineWidth = 1;
      ctx.stroke();
    }
    else if(yy > 0 && xx < 0)
    {
      var ligne;//y
      ligne = parseFloat(550/500)*x2;
      var colone = parseFloat(b1 - y*ligne)/parseFloat(x);//x
      ctx.moveTo(900*(colone/x1)+50,0);
      ctx.lineTo(50,50 + (500 - 500 * (yy/x2)));
      ctx.lineWidth = 1;
      ctx.stroke();
    }
    else
    {
      ctx.moveTo(900*(xx/x1)+50,550);
      ctx.lineTo(50,50 + (500 - 500 * (yy/x2)));
      ctx.lineWidth = 1;
      ctx.stroke();
    }
    if(xx > 0 && y == 0)
    {
      ctx.moveTo(900*(xx/x1) + 50,550);
      ctx.lineTo(900*(xx/x1) + 50,0);
      ctx.lineWidth = 1;
      ctx.stroke();
    }
    if(yy > 0 && x == 0)
    {
      ctx.moveTo(50,50 + (500 - 500 * (yy/x2)));
      ctx.lineTo(1000,50 + (500 - 500 * (yy/x2)));
      ctx.lineWidth = 1;
      ctx.stroke();
    }
    i++;
  	}
  	//peindre(x1,x2);
  	//a.appendChild(document.createTextNode(duplic_trie(intersection()).toString()));
  	if(intersection(variables,contraintes) == -1)
  	{
  		a.appendChild(document.createTextNode('Ensemble vide'));
  	}
  	else if(non_bor == 0)
  	{

  		draw_region_admis(duplic_trie(intersection(variables,contraintes)),x1,x2);
  		var type;
  		var radio = document.getElementById('radio1');
  		if(radio.checked)
  			type = 'max';
  		else
  			type = 'min';
  		a.appendChild(document.createElement('br'));
  		var fin = calculer_z(duplic_trie(intersection(variables,contraintes)),type);
  		a.appendChild(document.createTextNode('x1 = '.concat(fin[0].toString())));
  		a.appendChild(document.createElement('br'));
  		a.appendChild(document.createTextNode('x2 = '.concat(fin[1].toString())));
  		a.appendChild(document.createElement('br'));
  		a.appendChild(document.createTextNode('Z = '.concat(fin[2].toString())));
  		a.appendChild(document.createElement('br'));
  		ctx.fillText('A('.concat(fin[0].toFixed(2).toString(),',',fin[1].toFixed(2).toString(),')'),900*(fin[0]/x1)+50+3,50 + (500 - 500 * (fin[1]/x2))+3);
      	ctx.stroke();
			draw_inter(duplic_trie(intersection(variables,contraintes)),x1,x2,fin[0],fin[1]);
  	}
  	else
  	{
  		peindre(x1,x2,variables,contraintes);
  	}

 }
 function draw_inter(array,x1,x2,a,b)
 {
	 var a1 = document.getElementById('myCanvas');
	 var ctx = a1.getContext("2d");
	 var i = 0;
	 while(i < array.length)
	 {
		 if((array[i][0] != a ||array[i][1] != b) && array[i][0] != 0 && array[i][1] != 0 )
		 {
		 		ctx.fillText('('.concat(array[i][0].toFixed(2).toString(),',',array[i][1].toFixed(2).toString(),')'),900*(array[i][0]/x1)+50+3,50 + (500 - 500 * (array[i][1]/x2))+3);
				ctx.stroke();
			}
			i++;
	 }

 }
 function draw_region_admis(array,x1,x2)
 {
 	var b = document.getElementById('myCanvas');
 	var ctx = b.getContext("2d");
 	var i = 1;
 	var x ;
 	var y;
 	if(array.length == 2)
 	{
 		ctx.beginPath();
 		x = array[0][0];
 		y = array[0][1];
 		ctx.moveTo(900*(x/x1)+50,50 + (500 - 500 * (y/x2)));
      	x = array[1][0];
 		y = array[1][1];
 		ctx.lineTo(900*(x/x1)+50,50 + (500 - 500 * (y/x2)));
 		ctx.strokeStyle = '#f02c4d';
 		ctx.stroke();

 	}
 	else
 	{
 		if(array.length > 1)
 		{
 			ctx.beginPath();
 			x = array[0][0];
 			y = array[0][1];
 			ctx.moveTo(900*(x/x1)+50,50 + (500 - 500 * (y/x2)));
 			while(i < array.length)
 			{
 				x = array[i][0];
 				y = array[i][1];
 				ctx.lineTo(900*(x/x1)+50,50 + (500 - 500 * (y/x2)));
 				i++;
 			}
 			ctx.fillStyle = '#808000';
			ctx.fill();
 		}
 	}
 }
 //Z d une point
 function calculer_z(array,type)
 {
 	var i = 1;
 	var x = array[0][0];
 	var y = array[0][1];
 	var a = eval(document.getElementById('Cj1').value);
 	var b = eval(document.getElementById('Cj2').value);
 	while(i < array.length)
 	{
 		if((eval(a*x + b*y) < eval(a * array[i][0] + b* array[i][1]) ) && type == 'max')
 		{
 			x = array[i][0];
 			y = array[i][1];
 		}
 		if((eval(a*x + b*y) > eval(a * array[i][0] + b* array[i][1]) ) && type == 'min')
 		{
 			x = array[i][0];
 			y = array[i][1];
 		}
 		i++;
 	}
 	return[x,y,eval(a*x + b*y)];
 }
