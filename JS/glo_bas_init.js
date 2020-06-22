//Fonction de determiner les variables globales
function var_globale(variables,contraintes)
{
  var array=Array();
  var i = 0;
  var j = 0;
  while (i < variables)
  {
    array[j] = 'x'.concat((i+1).toString());
    i++;
    j++;
  }
  i = 0;
  while(i < contraintes)
  {
    var c = document.getElementById('contraint'.concat((i+1).toString()));
    if(c.value != '=')
    {
      array[j] = 'e'.concat((i+1).toString());
      j++;
    }
    i++;
  }
  i = 0;
  while(i < contraintes)
  {
    var c = document.getElementById('contraint'.concat((i+1).toString()));
    var d = document.getElementById('b'.concat((i+1).toString()));
    if(c.value != '<=')
    {
      array[j] = 'a'.concat((i+1).toString());
      j++;
    }
    i++;
  }
  array[j] = 'b';
  return (array);
}
//Fonction pour determiner les varibles de base
function var_base(variables,contraintes)
{
    var array = Array();
    var i = 0;
    var j = 0;
    while(i < contraintes)
    {
      var c = document.getElementById('contraint'.concat((i+1).toString()));
      var d = document.getElementById('b'.concat((i+1).toString()));
      if(c.value != '<=')
      {
        array[j] = 'a'.concat((i+1).toString());
        j++;
      }
      else
      {
        array[j] = 'e'.concat((i+1).toString());
        j++;
      }
      i++;
    }
    return (array);
}
//Remplir le tableau initial
function table_initial(variables,contraintes)
{
  var i = 0;
  var t;
  var k;
  var j;
  var array = Array();
  while (i < contraintes)
  {
    array[i]=Array();
    j = 0;
    while(j < variables)
    {
      var a = document.getElementById('x'.concat((i+1).toString(),(j+1).toString()));
      array[i][j] = eval(a.value);
      j++;
    }
    t = 1;
    while(t <= contraintes)
    {
      var a = document.getElementById('contraint'.concat(t.toString()));
      if(t == i + 1)
      {
        if(a.value == '<=')
        {
          array[i][j] = 1;
          j++;
        }
        else if(a.value == '>=')
        {
          array[i][j] = -1;
          j++;
        }
      }
      else
      {
        if(a.value != '=')
        {
          array[i][j] = 0;
          j++;
        }
      }
      t++;
    }
    k = 1;
    while(k <= contraintes)
    {
      var a = document.getElementById('contraint'.concat(k.toString()));
      if(k == i + 1)
      {
        if(a.value != '<=')
        {
          array[i][j] = 1;
          j++;
        }
      }
      else
      {
        if(a.value != '<=')
        {
          array[i][j] = 0;
          j++;
        }
      }
      k++;
    }
    array[i][j] = eval(document.getElementById('b'.concat((i+1).toString())).value);
    i++;
  }
  return array;
}
