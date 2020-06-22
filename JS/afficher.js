
//fonction principale
function afficher(variables,contraintes)
{
  var i = 0;
  var j = 0;
  var t=0;
  var non_bor = 0;
  while(i < contraintes)
  {
    j = 0;
    while(j < variables)
    {
      var t = document.getElementById('x'.concat((i+1).toString(),(j+1).toString()));
      try {
        eval(t.value);
      }catch(e){
        if (e instanceof ReferenceError)
        {
          t.value="";
          t.setAttribute('class','vide');
          t.setAttribute('placeholder','non valide');
          t = 1;
        }
      }
      if(t.value == "")
      {
        t.setAttribute('class','vide');
        t.setAttribute('placeholder','non valide');
        t = 1;
      }
      j++;
    }
    var t = document.getElementById('b'.concat((i+1).toString()));
    try {
      eval(t.value);
    }catch(e){
      if (e instanceof ReferenceError)
      {
        t.value="";
         t.setAttribute('class','vide');
          t.setAttribute('placeholder','non valide');
          t = 1;
      }
    }
    if(t.value == "")
    {
      t.setAttribute('class','vide');
      t.setAttribute('placeholder','non valide');
      t = 1;
    }
    i++;
  }
  i = 0;
  while(i < variables)
  {
    var t1 = document.getElementById('Cj'.concat((i+1).toString()));
    try {
      eval(t1.value);
    }catch(e){
      if (e instanceof ReferenceError)
      {
        t1.value="";
        t1.setAttribute('class','vide');
        t1.setAttribute('placeholder','non valide');
        t = 1;
      }
    }
    if(t1.value == "")
    {
      t1.setAttribute('class','vide');
      t1.setAttribute('placeholder','non valide');
      t = 1;
    }
    i++;
  }
  if (t==1)
    return (1);
  convert(contraintes,variables);
  var a = document.getElementById('radio1');
  if(a.checked)
  {
    var a = var_globale(variables,contraintes);
    var b = a.toString();
    if(b.includes('a') == 1)
    {
        var a = cout_phase2(variables,'max',variables,contraintes);
        if(a == 0 || a == -1)
        {
            if(a == 0)
              document.getElementById('racine').appendChild(document.createTextNode('Ensemble vide'));
            if(a == -1)
            {
                document.getElementById('racine').appendChild(document.createTextNode('Probleme non borne'));
                non_bor = 1;
            }
        }
        else
        {
        var var_b = a[1];
        var array = a[0];
        var i = 0;
        var index;
        var length = array[0].length;
        while(i < variables)
        {
          if(var_b.indexOf('x'.concat((i+1).toString())) != -1)
          {
            index = var_b.indexOf('x'.concat((i+1).toString()));
            document.getElementById('racine').appendChild(document.createTextNode('x'.concat((i+1).toString(),' = ',array[index][length - 1].toString())));
            document.getElementById('racine').appendChild(document.createElement('br'));
          }
          else {
            document.getElementById('racine').appendChild(document.createTextNode('x'.concat((i+1).toString(),' = 0 ')));
            document.getElementById('racine').appendChild(document.createElement('br'));
          }
          i++;
        }
        document.getElementById('racine').appendChild(document.createTextNode('Z = '.concat(array[array.length - 1][length - 1])));
      }
    }
    else
    {
        var a = resolution_max(cout_direct(variables,contraintes),var_globale(variables,contraintes),var_base(variables,contraintes),indice_max,0);
        if(a == -1)
        {
          document.getElementById('racine').appendChild(document.createTextNode('Probleme non borne'));
          return (1);
        }
        var i = 0;
        var var_b = a[1];
        var array = a[0];
        var index;
        var length = array[0].length;
        while(i < variables)
        {
          if(var_b.indexOf('x'.concat((i+1).toString())) != -1)
          {
            index = var_b.indexOf('x'.concat((i+1).toString()));
            document.getElementById('racine').appendChild(document.createTextNode('x'.concat((i+1).toString(),' = ',array[index][length - 1].toString())));
            document.getElementById('racine').appendChild(document.createElement('br'));
          }
          else {
            document.getElementById('racine').appendChild(document.createTextNode('x'.concat((i+1).toString(),' = 0 ')));
            document.getElementById('racine').appendChild(document.createElement('br'));
          }
          i++;
        }
        document.getElementById('racine').appendChild(document.createTextNode('Z = '.concat(array[array.length - 1][length - 1])));
    }
  }
  else
  {
    var a = var_globale(variables,contraintes);
    var b = a.toString();
    if(b.includes('a') == 1)
    {
        var a = cout_phase2(variables,'min',variables,contraintes);
        if(a == 0 || a == -1)
        {
            if(a == 0)
              document.getElementById('racine').appendChild(document.createTextNode('Ensemble vide'));
            if(a == -1)
            {
                document.getElementById('racine').appendChild(document.createTextNode('Probleme non borne'));
                non_bor = 1;
            }
        }
        else
        {
        var var_b = a[1];
        var array = a[0];
        var i = 0;
        var index;
        var length = array[0].length;
        while(i < variables)
        {
          if(var_b.indexOf('x'.concat((i+1).toString())) != -1)
          {
            index = var_b.indexOf('x'.concat((i+1).toString()));
            document.getElementById('racine').appendChild(document.createTextNode('x'.concat((i+1).toString(),' = ',array[index][length - 1].toString())));
            document.getElementById('racine').appendChild(document.createElement('br'));
          }
          else {
            document.getElementById('racine').appendChild(document.createTextNode('x'.concat((i+1).toString(),' = 0 ')));
            document.getElementById('racine').appendChild(document.createElement('br'));
          }
          i++;
        }
        document.getElementById('racine').appendChild(document.createTextNode('Z = '.concat(array[array.length - 1][length - 1])));
      }
    }
    else
    {
        var a = resolution_min(cout_direct(variables,contraintes),var_globale(variables,contraintes),var_base(variables,contraintes),indice_min,0);
        if(a == -1)
        {
          document.getElementById('racine').appendChild(document.createTextNode('Probleme non borne'));
          return (1);
        }
        var i = 0;
        var var_b = a[1];
        var array = a[0];
        var index;
        var length = array[0].length;
        while(i < variables)
        {
          if(var_b.indexOf('x'.concat((i+1).toString())) != -1)
          {
            index = var_b.indexOf('x'.concat((i+1).toString()));
            document.getElementById('racine').appendChild(document.createTextNode('x'.concat((i+1).toString(),' = ',array[index][length - 1].toString())));
            document.getElementById('racine').appendChild(document.createElement('br'));
          }
          else {
            document.getElementById('racine').appendChild(document.createTextNode('x'.concat((i+1).toString(),' = 0 ')));
            document.getElementById('racine').appendChild(document.createElement('br'));
          }
          i++;
        }
        document.getElementById('racine').appendChild(document.createTextNode('Z = '.concat(array[array.length - 1][length - 1])));
    }
  }
	if(variables == 2)
  {
    var a = document.getElementById('racine');
    a.appendChild(document.createElement('br'));
    var final;
    final = document.createElement('button');
    final.onclick = function()
    {
    	draw(variables,contraintes,non_bor);
    };
    final.appendChild(document.createTextNode("Solution graphique"));
    a.appendChild(final);
  }
}
