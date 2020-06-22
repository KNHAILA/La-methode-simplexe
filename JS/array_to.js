//Pour afficher chaque tableau
function array_to_table(array,var_b,var_glo,pivot_ligne,pivot_column)
{
  var l = array.length;
  var k = array[0].length;
  var i = 0;
  var j = 0;
  var racine = document.getElementById('racine');
  var table = document.createElement('table');
  racine.appendChild(table);
  var tr = document.createElement('tr');
  table.appendChild(tr);
  var th = document.createElement('th');
  tr.appendChild(th);
  while(j < var_glo.length)
  {
    var th = document.createElement('th');
    tr.appendChild(th);
    th.appendChild(document.createTextNode(var_glo[j].toString()));
    j++;
  }
  while(i < l)
  {
    var tr = document.createElement('tr');
    var th = document.createElement('th');
    tr.appendChild(th);
    if(i != l-1)
      th.appendChild(document.createTextNode(var_b[i].toString()));
    else
      th.appendChild(document.createTextNode('Cj'));
    j = 0;
    table.appendChild(tr);
    while(j < k)
    {
      var td = document.createElement('td');
      if(i==pivot_ligne && j==pivot_column)
      {
        td.setAttribute('class','pivot');
      }
      else if(i==pivot_ligne || j==pivot_column)
      {
        td.setAttribute('class','td1');
      }
      tr.appendChild(td);
      td.appendChild(document.createTextNode(array[i][j].toString()));
      j++;
    }
    i++;
  }
}
//si on n'a pas de phase 1
function cout_direct(variables,contraintes)
{
  var array = table_initial(variables,contraintes);
  var length = array.length;
  var length1 = array[0].length;
  var var_glo = var_globale(variables,contraintes);
  array[length] = Array();
  var k = 0;
  while(k < length1)
  {
    if (var_glo[k].includes('x') == 1)
    {
      var a=document.getElementById('Cj'.concat((k+1).toString()));
      array[length][k]=eval(a.value);
    }
    else {
      array[length][k]=0;
    }
    k++;
  }
  return(array)
}
