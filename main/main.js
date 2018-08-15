module.exports = function main() {
    let sequence = new Sequence([6, 9, 15, -2, 92, 11]);
    console.log(`o) 最小值 = ${sequence.minimum()}
o) 最大值 = ${sequence.maximum()}
o) 元素数量 = ${sequence.getLength()}
o) 平均值 = ${sequence.averageValue()}`);
};

class Sequence {
  constructor(input) {
    // Write your code here
	this.input = input;
  }

  minimum() {
    // Write your code here
	var min = this.input[0];
	for (var i = 1; i < this.input.length; i++)
	{
		if (this.input[i] < min)
			min = this.input[i];
	}
	return min;
  }

  // Write your code here
  maximum(){
	  var max = this.input[0];
	  for (var j = 1; j < this.input.length; j++)
	  {
		if (this.input[j] > max)
			max = this.input[j];
	  }
	  return max;
  }
  averageValue() {
	  var sum = 0;
	  for ( var k = 0; k < this.input.length; k++)
	  {
		  sum += this.input[k];
	  }
	  var ave = sum / this.input.length;
	  ave = ave.toFixed(2);
	  return ave;

  }
  getLength(){
	  return this.input.length;
  }
}
