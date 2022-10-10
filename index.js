let p_amt = 5000;
let m_amt = 3999;
let d_amt = p_amt - (p_amt * 0.1);
if (p_amt >= m_amt) {
  console.log("The new bill is:", d_amt);
}
else {
  console.log("Not Eligible")
}