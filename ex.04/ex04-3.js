

const scores = [13, 67, 18, 54, 30, 22, 89, 49, 21, 65]

function scoring(score) {
  // ここに課題04-2の回答をコピーする
  if (score >= 90) {
      console.log('秀')
    } else if (score >= 75) {
      console.log('優')
    } else if (score >= 60) {
      console.log('良')
    } else if (score >= 30) {
      console.log('可')
    } else {
      console.log('不可')
    }
} 

//console.log(scores[0])
 

  //console.log(scoring(13)) 
  //console.log(scoring(67)) 
  //console.log(scoring(18)) 
  //console.log(scoring(54))　


  //console.log(scores)そのままでる

  //console.log(scoring(scores.forEach))不可のみ

  scores.forEach(
    (score) => {
    console.log(scoring(score))
  })

  //console.log(scoring(scores))不可のみ

  //console.log(scoring([13, 67, 18, 54, 30, 22, 89, 49, 21, 65]))

  //console.log(scoring(13, 67, 18, 54, 30, 22, 89, 49, 21, 65))

 