
function afficher2(variables,contraintes)
{
  var racine = document.getElementById('racine');
  racine.removeChild(document.getElementById('destroyed'));
  var a = document.getElementById('racine');
  var i = 0;
  var j = 0;
  while (i < contraintes)
  {
    var p = document.createElement('p');
    a.appendChild(p);
      j = 0;
      while(j < variables)
      {
        var x=document.createElement('input');
         x.setAttribute('type','text');
        x.setAttribute('id','x'.concat((i+1).toString(),(j+1).toString()));
        x.setAttribute('size','10');
        p.appendChild(x);
        p.appendChild(document.createTextNode(' x'.concat((j+1).toString(),' ')));
        if(j == variables - 1)
        {
            var y = document.createElement('select');
            y.setAttribute('id','contraint'.concat((i+1).toString()));
            p.appendChild(y);
            var y1 = document.createElement('option');
            y1.setAttribute('value','=');
            y1.appendChild(document.createTextNode('='));
            y.appendChild(y1);
            var y2 = document.createElement('option');
            y2.setAttribute('value','<=');
            y2.appendChild(document.createTextNode('<='));
            y.appendChild(y2);
            var y4 = document.createElement('option');
            y4.setAttribute('value','>=');
            y4.appendChild(document.createTextNode('>='));
            y.appendChild(y4);
            p.appendChild(document.createTextNode(' '));
            var z=document.createElement('input');
            z.setAttribute('id','b'.concat((i+1).toString()));
            z.setAttribute('type','text');
            z.setAttribute('size','10');
            p.appendChild(z);
        }
        else
        {
            p.appendChild(document.createTextNode(' + '));
        }
        j++;
      }
    i++;
  }
var h1 = document.createElement('h1');
var radio1 = document.createElement('input');
radio1.setAttribute('name','nom');
radio1.setAttribute('value','max');
radio1.setAttribute('type','radio');
radio1.setAttribute('id','radio1');
h1.appendChild(radio1);
h1.appendChild(document.createTextNode('Max'));
var radio2 = document.createElement('input');
radio2.setAttribute('type','radio');
radio2.setAttribute('name','nom');
radio2.setAttribute('value','min');
radio2.setAttribute('id','radio2');
radio1.setAttribute('checked','');
h1.appendChild(radio2);
h1.appendChild(document.createTextNode('Min'));
a.appendChild(h1);
var p = document.createElement('p');
p.appendChild(document.createTextNode('Z =  '));
i = 0;
while(i < variables)
{
  var x=document.createElement('input');
  x.setAttribute('type','text');
  x.setAttribute('id','Cj'.concat((i+1).toString()));
  x.setAttribute('size','10');
  p.appendChild(x);
  p.appendChild(document.createTextNode(' x'.concat((i+1).toString(),' ')));
  if(i < variables - 1)
  {
    p.appendChild(document.createTextNode('  +  '));
  }
  i++;
}
a.appendChild(p);
var text = 'x';
i = 0;
while(i < variables - 1)
{
	 text = text.concat((i+1).toString(),' ,	x');
	i++;
}
text = text.concat((i+1).toString(),' >= 0 ');
a.appendChild(document.createElement('br'));
a.appendChild(document.createTextNode(text));
a.appendChild(document.createElement('br'));
var final;
final = document.createElement('button');
final.onclick = function(){
  afficher(variables,contraintes);
};
final.appendChild(document.createTextNode("afficher"));
a.appendChild(final);
}
