function takeANumber(katzDeliLine, name){
  katzDeliLine.push(name)
  return `Welcome, ${name}. You are number ${katzDeliLine.length} in line.`
}

function nowServing(deliLine){
  if(deliLine.length > 0){
    var firstInLine = deliLine.shift()
    return `Currently serving ${firstInLine}.`
  }
  else
    return ""
    
}