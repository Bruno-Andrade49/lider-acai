"use client"

import { Button } from "@/components/ui/button";

const ButtonOrderConfirmation = () => {
    const handleFinalizeOrder = () => {
        const cartItems = JSON.parse(localStorage.getItem("carrinho") || "[]");
        const selectedAddress = JSON.parse(localStorage.getItem("selectedAddress") || "{}");
    
        let message = "Meu pedido:\n";
        cartItems.forEach((item : any) => {
          message += `${item.qtd}x ${item.name}\n`;
        });
    
        if (selectedAddress) {
          message += "\nEndereço de Entrega:\n";
          message += `${selectedAddress.name}, ${selectedAddress.num}\n`;
          message += `${selectedAddress.bairro}\n`;
          if (selectedAddress.complemento) {
            message += `${selectedAddress.complemento}\n`;
          }
        }
    
        const encodedMessage = encodeURIComponent(message);
    
        const whatsappUrl = `https://wa.me/+558394045922?text=${encodedMessage}`;
    
        window.location.href = whatsappUrl;
      };

  return (
    <div className="mt-6 px-3">
      <Button
        variant={"default"}
        className="w-full bg-red-950"
        onClick={handleFinalizeOrder}
      >
        Finalizar pedido!
      </Button>
    </div>
  );
};

export default ButtonOrderConfirmation;
