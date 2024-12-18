
<html>

<head>
    <link rel="stylesheet" href={{asset('CSS/style.css')}}>

</head>
@include('Header')
<body>
  <div class="form">
    <form method="post" name="Form" id="form" onsubmit="matchPassword(this)" class="input" action="<?php echo htmlspecialchars($_SERVER["PHP_SELF"]); ?>" enctype="multipart/form-data">
      <div>
        <span>FullName*: </span><input type="text" onfocusout="validateName()" name="name" class="info" id="name" value="">

      <span class="error" id="message1"> </span><br>

      <div>
        <span>UserName*: </span><input type="text" onfocusout="validateUserName()" name="username" class="info" id="username" value="">
        <span class="error" id="message2"> </span><br>

      </div>
      <div>
        <span>BirthDate*:</span> <input type="Date" onchange="showActors()" onfocusout="validateDate()" name="bd" class="info" id="birth" value="">
        <span onclick="showActorList()" class="show-button">show Actors</span>
        <div class=" actor-list">
        </div>
        <span class="error" id="message3"> </span><br>

      </div>
      <div>
        <span>phone*:</span> <input type="Number" onfocusout="validatePhone()" name="phone" class="info" id="phone" value="">
        <span class="error" id="message4"></span><br>

      </div>
      <div>
        <span>Address*: </span><input type="text" onfocusout="validateAddress()" name="address" class="info" id="address" value="">
        <span class="error" id="message5"> </span><br>

      </div>
      <div>
        <span>Email*:</span> <input type="text" onfocusout="validateEmail()" name="email" class="info" id="email" value="">
        <span class="error" id="message8"> </span><br>

      <div>
        <span>Password*:</span> <input type="password" onfocusout="validatePassword()" name="password" class="info" id="pswd1" value="">
        <span class="error" id="message6"> </span><br>

      </div>
      <span>ConfirmPass*:</span> <input type="password" onfocusout="validateConfirmPassword()" name="confirmpassword" id="pswd2" class="info" value="">
      <span class="error" id="message7"></span><br>


      <input type="submit" name="submit" class="submit">
    </form>
  </div>
  @include('Footer')

  <script src={{asset('js/index.js')}}></script> 
</body>

</html>
