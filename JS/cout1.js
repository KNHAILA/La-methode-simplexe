
function cout_phase1(variables,contraintes)
{
  var a=document.getElementById('racine');
  var h=document.createElement('h3');
  a.appendChild(h);
  h.appendChild(document.createTextNode("Phase 1 : "));
  var array = table_initial(variables,contraintes);
  var var_glo = var_globale(variables,contraintes);
  var i = array.length;
  var j = array[0].length;
  var k = 0;
  var t = 0;
  var f = 0;
  array[i] = Array();
  while(k < j)
  {
    if(var_glo[k].includes('a') == 1)
    {
      array[i][k] = 1;
    }
    else
    {
      array[i][k] = 0;
    }
    k++;
  }
  k = 0;
  array_to_table(array,var_base(variables,contraintes),var_glo,-1,-1);
  while(var_glo[k].includes('a') != 1 && k < j)
  {
    k++;
  }
  while(var_glo[k].includes('a') == 1 && k < j)
  {
    t=var_glo[k].substring(1);
    f = 0;
    while(f < j - 1)
    {
      array[i][f] = array[i][f] - array[t - 1][f];
      f++;
    }
    array[i][j-1]= parseFloat(array[i][j-1]) + parseFloat(array[t-1][j-1]);
    k++;
  }
  return array;
}
