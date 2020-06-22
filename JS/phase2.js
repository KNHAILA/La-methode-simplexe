function cout_phase2(variables,type,variables,contraintes)
{
    var retrn = resolution_min(cout_phase1(variables,contraintes),var_globale(variables,contraintes),var_base(variables,contraintes),indice_min,0);
    var a=document.getElementById('racine');
    var h=document.createElement('h3');
    a.appendChild(h);
    h.appendChild(document.createTextNode("Phase 2 : "));
    if(retrn == -1)
      return(-1);
    var array= retrn[0];
    var var_b = retrn[1];
    if(parseFloat(array[array.length - 1][array[0].length - 1]) != 0)
      return (0);
    var var_glo = var_globale(variables,contraintes);
    var var_glo2 = Array();
    var array1 = Array();
    var i = 0;
    var j;
    var k;
    var index;
    var index2;
    var pivot;
    while(i < var_b.length)
    {
      array1[i]=Array();
      j=0;
      k=0;
      while (k <var_glo.length)
      {
        if (var_glo[k].includes('a') != 1)
        {
          array1[i][j]=array[i][k];
          j++;
        }
        k++;
      }
      i++;
    }
    k = 0;
    array1[i]=Array();
    while(k < array1[0].length)
    {
      if (var_glo[k].includes('x') == 1)
      {
        var a=document.getElementById('Cj'.concat((k+1).toString()));
        array1[i][k]=eval(a.value);
      }
      else {
        array1[i][k]=0;
      }
      k++;
    }
    var i1 = 0;
    j = 0;
    while(i1 < var_glo.length)
    {
      if (var_glo[i1].includes('a') != 1)
      {
        var_glo2[j] = var_glo[i1];
        j++;
      }
      i1++;
    }
    array_to_table(array1,var_b,var_glo2,-1,-1);
    k=0;
    j = 0;
    while (k<variables)
    {
      if (var_b.indexOf('x'.concat((k+1).toString()))  != -1)
      {
        index = var_b.indexOf('x'.concat((k+1).toString()));
        index2 = var_glo.indexOf('x'.concat((k+1).toString()));
        pivot = array1[i][index2];
        while(j < array1[0].length)
        {
          array1[i][j] = parseFloat(array1[i][j]) -parseFloat(pivot)*parseFloat(array1[index][j]);
          j++;
        }
      }
      k++;
    }
    array1[i][j-1] = -parseFloat(array1[i][j-1]);
    if(type == 'min')
      var array2=resolution_min(array1,var_glo2,var_b,indice_min,0);
    else
      var array2=resolution_max(array1,var_glo2,var_b,indice_max,0);
    return (array2);
}
