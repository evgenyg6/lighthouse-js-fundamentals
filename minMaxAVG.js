function minMaxAvg(arr)
{
  var r_min = arr[0];
  var r_max = arr[0];
  var r_sum = arr[0];

  for(var i = 1; i < arr.length; i++)
  {
    if(arr[i] > r_max)
    {
      r_max = arr[i];
    }
    if(arr[i] < r_min)
    {
      r_min = arr[i];
    }

    r_sum = r_sum + arr[i];

  }

  r_avg = r_sum / arr.length;

  return [r_min, r_max, r_avg];
}



console.log(minMaxAvg([2,23,45,67,23,1,7,5,9,10]))
