'use client'

import React, { createContext, useContext, useState, ReactNode } from 'react';

export interface IngredientOrder {
  name: string;
  qtd: number;
}

interface IngredientContextProps {
  carrinho: IngredientOrder[];
  clearIngredients: () => void;
  ingredients: IngredientOrder[];
  selectedCount: number;
  addIngredient: (IngredientOrder: IngredientOrder) => void;
  removeIngredient: (IngredientOrder: IngredientOrder) => void;

  ingredients2: IngredientOrder[];
  selectedCount2: number;
  addIngredient2: (IngredientOrder: IngredientOrder) => void;
  removeIngredient2: (IngredientOrder: IngredientOrder) => void;

  ingredients3: IngredientOrder[];
  selectedCount3: number;
  addIngredient3: (IngredientOrder: IngredientOrder) => void;
  removeIngredient3: (IngredientOrder: IngredientOrder) => void;
}

const IngredientContext = createContext<IngredientContextProps | undefined>(undefined);

export const useIngredientContext = (): IngredientContextProps => {
  const context = useContext(IngredientContext);
  if (!context) {
    throw new Error('useIngredientContext must be used within an IngredientProvider');
  }
  return context;
};

interface IngredientProviderProps {
  children: ReactNode;
}

export const IngredientProvider: React.FC<IngredientProviderProps> = ({ children }) => {

  // Ingredientes Passo 01
  const [ingredients, setIngredients] = useState<IngredientOrder[]>([]);
  const [selectedCount, setSelectedCount] = useState(0);

  // Ingredientes Passo 01
  const [ingredients2, setIngredients2] = useState<IngredientOrder[]>([]);
  const [selectedCount2, setSelectedCount2] = useState(0);

  // Ingredientes Passo 01
  const [ingredients3, setIngredients3] = useState<IngredientOrder[]>([]);
  const [selectedCount3, setSelectedCount3] = useState(0);


  const [carrinho, setCarrinho] = useState<IngredientOrder[]>([]);


  //PASS0 01

  const addIngredient = (IngredientOrder: IngredientOrder) => {
    if (carrinho.length < 2 && !carrinho.some(item => item.name === IngredientOrder.name)) {
      setCarrinho(prevCarrinho => [...prevCarrinho, IngredientOrder]);
      setIngredients(prevIngredients => [...prevIngredients, IngredientOrder]);
      setSelectedCount(prevCount => prevCount + 1);
    }
  };

  const removeIngredient = (IngredientOrder: IngredientOrder) => {
    setCarrinho(prevCarrinho => prevCarrinho.filter(item => item.name !== IngredientOrder.name));
    setIngredients(prevIngredients => prevIngredients.filter(item => item.name !== IngredientOrder.name));
    setSelectedCount(prevCount => prevCount - 1);
  };

  const addIngredient2 = (IngredientOrder: IngredientOrder) => {
    if (selectedCount2 < 2 && !carrinho.some(item => item.name === IngredientOrder.name)) {
      setCarrinho(prevCarrinho => [...prevCarrinho, IngredientOrder]);
      setIngredients2(prevIngredients => [...prevIngredients, IngredientOrder]);
      setSelectedCount2(prevCount => prevCount + 1);
    }
  };

  const removeIngredient2 = (IngredientOrder: IngredientOrder) => {
    setCarrinho(prevCarrinho => prevCarrinho.filter(item => item.name !== IngredientOrder.name));
    setIngredients2(prevIngredients => prevIngredients.filter(item => item.name !== IngredientOrder.name));
    setSelectedCount2(prevCount => prevCount - 1);
  };

  const addIngredient3 = (IngredientOrder: IngredientOrder) => {
    if (selectedCount3 < 2 && !carrinho.some(item => item.name === IngredientOrder.name)) {
      setCarrinho(prevCarrinho => [...prevCarrinho, IngredientOrder]);
      setIngredients3(prevIngredients => [...prevIngredients, IngredientOrder]);
      setSelectedCount3(prevCount => prevCount + 1);
    }
  };

  const removeIngredient3 = (IngredientOrder: IngredientOrder) => {
    setCarrinho(prevCarrinho => prevCarrinho.filter(item => item.name !== IngredientOrder.name));
    setIngredients3(prevIngredients => prevIngredients.filter(item => item.name !== IngredientOrder.name));
    setSelectedCount3(prevCount => prevCount - 1);
  };

  const clearIngredients = () => {
    setCarrinho([]);
    setIngredients([]);
    setSelectedCount(0);
    setIngredients2([]);
    setSelectedCount2(0);
    setIngredients3([]);
    setSelectedCount3(0);
  };

  return (
    <IngredientContext.Provider
      value={{ ingredients, carrinho, selectedCount, addIngredient, removeIngredient, ingredients2, selectedCount2, addIngredient2, removeIngredient2, ingredients3, selectedCount3, addIngredient3, removeIngredient3, clearIngredients }}
    >
      {children}
    </IngredientContext.Provider>
  );
};