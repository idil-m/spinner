process.stdout.write('hello from spinner1.js... \rheyyy\n');

const cursor = ['\r\\  ','\r| ','\r/  ','\r-  ','\r\\  '];
for(let i = 0; i < cursor.length; i++) {
  const spinner = cursor[i];
  setTimeout(() => {
    process.stdout.write(spinner)

  }, i * 1000)

};








/*setTimeout(() => {
process.stdout.write('\r| ');
},100);

setTimeout(() => { 
  process.stdout.write('\r/  ');
}, 300);

setTimeout(() =>{
  process.stdout.write('\r-  ');
}, 500);

setTimeout(() =>{
  process.stdout.write('\r\\  ');
}, 900);

setTimeout(() => {
  process.stdout.write('\r| ');
  },1100);
  
  setTimeout(() => { 
    process.stdout.write('\r/  ');
  }, 1300);
  
  setTimeout(() =>{
    process.stdout.write('\r-  ');
  }, 1500);
  
  setTimeout(() =>{
    process.stdout.write('\r\\  ');
  }, 1700); */