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
    return "There is nobody waiting to be served!"
}

function currentLine(katzDeliLine){
  var lineLen = katzDeliLine.length
  var result = ["The line is currently: "]
  if(lineLen > 0){
    for(var i= 0; i<lineLen; i++){
      result[i+1].push(katzDeliLine[i])
    }
    
  }
  else{
    return "The line is currently empty."
  }
}