armazem = [1,2,3,4];
pedido = 0;

pedido = int(input("Escreva o numero"))

if pedido in armazem:
    print('ja tem ')
else:
    print('Nao tem')
    armazem.append(pedido)
    print('adicionou')
    
print(armazem)