
function indice_min(array)
{
  var j = 0;
  min = 0;
  while(j < array.length - 1)
  {
    if(parseFloat(array[min]) > parseFloat(array[j]))
    {
      min = j;
    }
    j++;
  }
  return (min);
}
//premier minimum
function indice_min1(array)
{
  var j = 0;
  while(j < array.length - 1)
  {
    if(parseFloat(array[j]) < 0)
    {
      return j;
    }
    j++;
  }
  return (j);
}

function indice_max(array)
{
  var j = 0;
  max = 0;
  while(j < array.length - 1)
  {
    if(parseFloat(array[max]) < parseFloat(array[j]))
    {
      max = j;
    }
    j++;
  }
  return (max);
}
//premier maximum
function indice_max1(array)
{
  var j = 0;
  while(j < array.length - 1)
  {
    if(parseFloat(array[j]) > 0)
    {
      return (j);
    }
    j++;
  }
  return (j);
}

function negative_exist(array)
{
  var j = 0;
  while(j < array.length - 1)
  {
    if(parseFloat(array[j]) < 0)
      return (1);
    j++;
  }
  return(0);
}
//positive number exist
function positive_exist(array)
{
  var j = 0;
  while(j < array.length - 1)
  {
    if(parseFloat(array[j]) > 0)
      return (1);
    j++;
  }
  return(0);
}
