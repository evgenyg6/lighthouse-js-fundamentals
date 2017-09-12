function removeLetterFromStr(str, letter)
{
  var empty = "";

  for(var i = 0; i < str.length; i++)
  {
    if(str[i] !== letter)
    {
      empty = empty + str[i];

    }
  }

  return empty;

}