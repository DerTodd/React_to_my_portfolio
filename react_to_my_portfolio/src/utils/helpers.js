export function validateEmail(email) {
    const cemail = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-z]{2,3})$/;
    if (email.match(cemail)) {
      return true;
    }
    return false;
  }
  
  export function validateContactName(input) {
    const cname = /^[A-Za-z][\w\s]{2,78}$/;
    if (input.match(cname)) {
      return true;
    }
    return false;
  }
 