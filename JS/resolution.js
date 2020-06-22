
function resolution_min(array,var_glo,var_b,indice_min,type)
{
  var i = array.length;
  var j = array[0].length;
  var pivot_ligne;
  var pivot_column;
  var degen_check;
  var pivot;
  var pivot2;
  var k = 0;
  var d = 0;
  while(negative_exist(array[i-1]) == 1)
  {
      pivot_column = indice_min(array[i - 1]);
      pivot_ligne = rationel(array,pivot_column);
      if(pivot_ligne == -1)
        return(-1);
      degen_check = degeneresence(array,pivot_column);
      if(degen_check != 1 && type == 0)
      {
        document.getElementById('racine').appendChild(document.createTextNode('probleme de degeneresence'));
        return(resolution_min(array,var_glo,var_b,indice_min1,1));
      }
      array_to_table(array,var_b,var_glo,pivot_ligne,pivot_column);
      var_b[pivot_ligne] = var_glo[pivot_column];
      pivot=array[pivot_ligne][pivot_column];
      k = 0;
      while(k < j)
      {
        array[pivot_ligne][k] = parseFloat(array[pivot_ligne][k])/parseFloat(pivot);
        k++;
      }
      k = 0;
      while(k < i)
      {
        pivot2 = array[k][pivot_column];
        d = 0;
        while(d < j)
        {
          if(k != pivot_ligne)
          {
            if(d!=j-1 || k!=i-1)
            {
              array[k][d] = parseFloat(array[k][d]) - parseFloat(pivot2) * parseFloat(array[pivot_ligne][d]);
            }
            else
            {
              array[k][d] = parseFloat(array[k][d]) + parseFloat(pivot2) * parseFloat(array[pivot_ligne][d]);
            }
          }
          d++;
        }
        k++;
      }
  }
  array_to_table(array,var_b,var_glo,-1,-1);
  return([array,var_b]);
}

function resolution_max(array,var_glo,var_b,indice_max,type)
{
  var i = array.length;
  var j = array[0].length;
  var pivot_ligne;
  var pivot_column;
  var pivot;
  var pivot2;
  var degen_check;
  var k = 0;
  var d = 0;
  while(positive_exist(array[i-1]) == 1)
  {
      pivot_column = indice_max(array[i - 1]);
      pivot_ligne = rationel(array,pivot_column);
      if(pivot_ligne == -1)
      {
        array_to_table(array,var_b,var_glo,pivot_ligne,pivot_column);
        return(-1);
      }
      degen_check = degeneresence(array,pivot_column);
      if(degen_check != 1 && type == 0)
      {
        document.getElementById('racine').appendChild(document.createTextNode('probleme de degeneresence'));
        return(resolution_max(array,var_glo,var_b,indice_max1,1));
      }
      array_to_table(array,var_b,var_glo,pivot_ligne,pivot_column);
      var_b[pivot_ligne] = var_glo[pivot_column];
      pivot=array[pivot_ligne][pivot_column];
      k = 0;
      while(k < j)
      {
        array[pivot_ligne][k] = parseFloat(array[pivot_ligne][k])/parseFloat(pivot);
        k++;
      }
      k = 0;
      while(k < i)
      {
        pivot2 = array[k][pivot_column];
        d = 0;
        while(d < j)
        {
          if(k != pivot_ligne)
          {
            if(d!=j-1 || k!=i-1)
            {
              array[k][d] = parseFloat(array[k][d]) - parseFloat(pivot2) * parseFloat(array[pivot_ligne][d]);
            }
            else
            {
              array[k][d] = parseFloat(array[k][d]) + parseFloat(pivot2) * parseFloat(array[pivot_ligne][d]);
            }
          }
          d++;
        }
        k++;
      }
  }
  array_to_table(array,var_b,var_glo,-1,-1);
  return([array,var_b]);
}
//calculer rationel
function rationel(array,i)
{
  var j = 0;
  var k = 0;
  var longeur = array[0].length;
  while(parseFloat(array[j][i]) <= 0 && j < array.length - 1)
  {
    j++;
  }
  if(j == array.length - 1)
    return (-1);
  k = j + 1;
  while(k < array.length - 1)
  {
    if(parseFloat(array[j][longeur - 1])/parseFloat(array[j][i]) > parseFloat(array[k][longeur - 1])/parseFloat(array[k][i]))
    {
      if(parseFloat(array[k][i]) > 0)
      {
        j = k;
      }
    }
    k++;
  }
  return (j);
}
//degeneresence existe
function degeneresence(array,i)
{
  var j = 0;
  var k = 0;
  var longeur = array[0].length;
  var l = 1;
  while(parseFloat(array[j][i]) <= 0 && j < array.length - 1)
  {
    j++;
  }
  k = j + 1;
  while(k < array.length - 1)
  {
    if(parseFloat(array[j][longeur - 1])/parseFloat(array[j][i]) == parseFloat(array[k][longeur - 1])/parseFloat(array[k][i]))
    {
      if(parseFloat(array[k][i]) > 0)
      {
        l++;
      }
    }
    if(parseFloat(array[j][longeur - 1])/parseFloat(array[j][i]) > parseFloat(array[k][longeur - 1])/parseFloat(array[k][i]))
    {
      if(parseFloat(array[k][i]) > 0)
      {
        j = k;
        l = 1;
      }
    }
    k++;
  }
  return (l);
}
