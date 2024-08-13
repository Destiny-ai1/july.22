const todos =[
    {tno:1, title:'근육량올리기',writeday:'2024-08-01',finish:false},
    {tno:2, title:'체지방빼기',writeday:'2024-10-01',finish:true}
];
let tno=3

const tbody =$('#tbody');

const render = ()=>{
    for(const t of todos){
        const row = `
        <tr>
        <td>${t.tno}</td>
        <td>${t.title}</td>
        <td>${t.writeday}</td>
        <td>
        <button class ='btn btn-success'>완료</button>
        </td>
        <td>
        button class = 'btn btn-danger'>삭제</button>
        </td>
        </tr>
        `
        tbody.append(row);
    }
}
render();
$('#addbtn').click(function(){
    if(title==''){
        alert('입력');
        return;
    }
});

$('#tbody').click,'작업중:완료'(function(){

});

$('#tbody').click,'삭제'(function(){

});