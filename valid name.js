function allLetter(inputtxt)
      { 
      var letters = /^[A-Za-z]+$/;
      if(inputtxt.value.match(letters))
      {
      alert(' gfdxsgc');
      return true;
      }
      else
      {
      alert('Please input alphabet characters only');
      return false;
      }
      }
