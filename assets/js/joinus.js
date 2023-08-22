function validateForm()
  {
    var fname=document.getElementById("fullname").value;
    var email=document.getElementById("email").value;
    var pn=document.getElementById("phnum").value;
    var qual=document.getElementById("qual-1").value;
    var dob=document.getElementById("dob").value;
    var resume=document.getElementById("resumeurl").value;
    var role=document.getElementById("role").value;
    
    if(fname=="")
    {
      alert("Name must be filled out");
      return false;
    }
    else if(fname!="")
    {
      if(fname.match(/\d/g))
      {
        alert("Name cannot contain digits");
        return false;
      }
    }

    if(email=="")
    {
      alert("Email must be filled out");
      return false;
    }

    if(pn=="")
    {
      alert("Phone Number must be filled out");
      return false;
    }
    else if(pn!="")
    { 
      if(pn<1000000000 || pn>10000000000)
      {
        alert("Phone Number should be 10 digits");
        return false;
      }
    }

    if(qual=="")
    {
      alert("Qualification must be filled out");
      return false;
    }

    if(dob=="")
    {
      alert("Date of Birth must be filled out");
      return false;
    }

    if(resume=="")
    {
      alert("Resume link must be provided");
      return false;
    }

    if(role=="")
    {
      alert("Role must be Selected");
      return false;
    }
  }