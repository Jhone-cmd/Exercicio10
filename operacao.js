//Questão 1
function media(){

    var A = Number(document.getElementById("n1").value) * 2;
    var B = Number(document.getElementById("n2").value) * 3;
    var C = Number(document.getElementById("n3").value) * 5;
    var Media = (A + B + C) / 10;

    document.getElementById("media").innerHTML = "Resultado: Média " + "= " + Media.toFixed(1);

}
//Questão 2
function senha(){
    var pass = Number(document.getElementById("password").value);

    if(pass == 2002){
        document.getElementById("senha").innerHTML = "Resultado: Acesso Permitido.";
        
    }

    else{
        document.getElementById("senha").innerHTML = "Resultado: Senha Inválida!";
    }
    
}
//Questão 3
function intervalo(){

    var valor = Number(document.getElementById("valor").value);
    
    if (valor > 0 && valor <= 25){
        document.getElementById("intervalo").innerHTML = "Resultado: O valor " + valor + " está entre o Intervalo [0,25]."
    }

    else if (valor > 25 && valor <= 50){
        document.getElementById("intervalo").innerHTML = "Resultado: O valor " + valor + " está entre o Intervalo [25,50]."
    }
    else if (valor > 50 && valor <= 75){
        document.getElementById("intervalo").innerHTML = "Resultado: O valor " + valor + " está entre o Intervalo [50,75]."
    }
    else if (valor > 75 && valor <= 100){
        document.getElementById("intervalo").innerHTML = "Resultado: O valor " + valor + " está entre o Intervalo [75,100]."
    }
    else{
        document.getElementById("intervalo").innerHTML = "Resultado: O valor " + valor + " está fora dos intervalos acima."

    }
}
//Questão 4
function novosalario(){

    var salario = Number(document.getElementById("salarioatual").value);
    var novosalario = 0;
    var percentual = ["15%", "12%", "10%", "7%", "4%"]
    var ganho = 0;

    if (salario > 0 && salario <= 400){

        novosalario = salario + (salario * (15/100));
        ganho = novosalario - salario;       
        document.getElementById("aumento").innerHTML = "Resultado: Novo salario: R$ " + novosalario.toFixed(2) + ", Ganho: R$ " + ganho.toFixed(2) + ", Percentual: " + percentual[0] + ".";
        
    }
    else if (salario > 400 && salario <= 800){

        novosalario = salario + (salario * (12/100));
        ganho = novosalario - salario;       
        document.getElementById("aumento").innerHTML = "Resultado: Novo salario: R$ " + novosalario.toFixed(2) + ", Ganho: R$ " + ganho.toFixed(2) + ", Percentual: " + percentual[1] + ".";
    }
    else if (salario > 800 && salario <= 1200){

        novosalario = salario + (salario * (10/100));
        ganho = novosalario - salario;       
        document.getElementById("aumento").innerHTML = "Resultado: Novo salario: R$ " + novosalario.toFixed(2) + ", Ganho: R$ " + ganho.toFixed(2) + ", Percentual: " + percentual[2] + ".";
    }
    else if (salario > 1200 && salario <= 2000){

        novosalario = salario + (salario * (7/100));
        ganho = novosalario - salario;       
        document.getElementById("aumento").innerHTML = "Resultado: Novo salario: R$ " + novosalario.toFixed(2) + ", Ganho: R$ " + ganho.toFixed(2) + ", Percentual: " + percentual[3] + ".";

    }
    else{

        novosalario = salario + (salario * (4/100));
        ganho = novosalario - salario;       
        document.getElementById("aumento").innerHTML = "Resultado: Novo salario: R$ " + novosalario.toFixed(2) + ", Ganho: R$ " + ganho.toFixed(2) + ", Percentual: " + percentual[4] + ".";
    }

}
//Questão 5
function imposto(){

    var valor = Number(document.getElementById("imposto").value);

    var taxa = 0;

    if (valor > 0 && valor <= 2000){

        document.getElementById("renda").innerHTML = "Resultado: Imposto Isento";

    }
    else if (valor > 2000 && valor <= 3000){

        taxa = (valor - 2000) * (8/100);
        document.getElementById("renda").innerHTML = "Resultado: Imposto " + taxa.toFixed(2);
    }
    else if (valor > 3000 && valor <= 4500){

        valor -= 2000;
        taxa = 80 + (valor - 1000) * (18/100);
        document.getElementById("renda").innerHTML = "Resultado: Imposto " + taxa.toFixed(2);
    }
    else{
        valor -= 2000;
        taxa = 80 + 270 + (valor - 2500) * (28/100);
        document.getElementById("renda").innerHTML = "Resultado: Imposto " + taxa.toFixed(2);
    }

}



