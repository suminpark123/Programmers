// function gcd(a, b) {
//   if (b === 0) {
//     return a;
//   }
//   return gcd(b, a % b);
// }

// function solution(numer1, denom1, numer2, denom2) {
//     if (0 < numer1 && numer1 < 1000 &&
//         0 < denom1 && denom1 < 1000 && denom1 !== 0 &&
//         0 < numer2 && numer2 < 1000 &&
//         0 < denom2 && denom2 < 1000 && denom2 !== 0)  {        
//         const a = parseInt((denom1 * denom2) / gcd(denom1, denom2));
        
//             if(a==(denom1*denom2)){
//                 var answer = [numer1*denom2+numer2*denom1,a];
//                 return answer;
//             }
//             else if(a!==(denom1*denom2)&&denom1<denom2){              
//                 var answer = [gcd(denom1,denom2)*numer1+numer2,denom2];
//                 return answer;
//             }
//             else {
//                 var answer = [gcd(denom1,denom2)*numer2+numer1,denom1];
//                 return answer;
//             }
// }   
// }
function gcd(a, b) {
  if (b === 0) {
    return a;
  }
  return gcd(b, a % b);
}

function lcm(a, b) {
  return (a * b) / gcd(a, b);
}

function reduceFraction(numer, denom) {
  const divisor = gcd(numer, denom);
  return [numer / divisor, denom / divisor];
}

function solution(numer1, denom1, numer2, denom2) {
  if (numer1 === 0) {
    return [numer2, denom2];
  }
  if (numer2 === 0) {
    return [numer1, denom1];
  }
  const commonDenom = lcm(denom1, denom2);
  const newNumer1 = numer1 * (commonDenom / denom1);
  const newNumer2 = numer2 * (commonDenom / denom2);
  const sumNumer = newNumer1 + newNumer2;
  const [irrNumer, irrDenom] = reduceFraction(sumNumer, commonDenom);
  return [irrNumer, irrDenom];
}

