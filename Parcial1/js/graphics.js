window.onload = init;

function init(){


let chBar= document.getElementById("Gbar").getContext("2d");
        let myChart= new Chart(chBar,{
            type:"bar",
            data:{
                labels:['Samsung','Huawei','Iphone','Xiaomi','Nokia'],datasets:[{
                        label:'Ventas',
                        data:[32,29,22,17,18],
                        backgroundColor:[
                            'rgb(115, 134, 244,0.7)',
                            'rgb(66, 134, 244,0.7)',
                            'rgb(229, 89, 50,0.7)',
                            'rgb(226,220,50,0.7)',
                            'rgb(115,226,50,0.7)'
                        ]
                }]
            },
            options:{
                scales:{
                    yAxes:[{
                            ticks:{
                                beginAtZero:true
                            }
                    }]
                }
            }
        });

let chPai= document.getElementById("Gpai").getContext("2d");
        let ChartPai= new Chart(chPai,{
            type:"pie",
            data:{
                labels:['Samsung','Huawei','Iphone','Xiaomi','Nokia'],datasets:[{
                        label:'Mas Buscados',
                        data:[137,150,104,86,27],
                        backgroundColor:[
                            'rgb(115, 134, 244,0.7)',
                            'rgb(66, 134, 244,0.7)',
                            'rgb(229, 89, 50,0.7)',
                            'rgb(226,220,50,0.7)',
                            'rgb(115,226,50,0.7)'
                        ]
                }]
            }
            
        });

}

/*function mostrar(){
  var archivo = document.getElementById("file").files[0];
  var reader = new FileReader();
  if (file) {
    reader.readAsDataURL(archivo );
    reader.onloadend = function () {
      document.getElementById("imagenNew").src = reader.result;
    }
  }
}
*/
