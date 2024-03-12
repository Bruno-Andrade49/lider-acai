'use client'

import React, { createContext, useContext, useState, ReactNode } from 'react';

interface IngredientContextProps {
  carrinho: string[];
  clearIngredients: () => void;
  ingredients: string[];
  selectedCount: number;
  addIngredient: (ingredient: string) => void;
  removeIngredient: (ingredient: string) => void;

  ingredients2: string[];
  selectedCount2: number;
  addIngredient2: (ingredient: string) => void;
  removeIngredient2: (ingredient: string) => void;

  ingredients3: string[];
  selectedCount3: number;
  addIngredient3: (ingredient: string) => void;
  removeIngredient3: (ingredient: string) => void;
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
  const [ingredients, setIngredients] = useState<string[]>([]);
  const [selectedCount, setSelectedCount] = useState(0);
  
  // Ingredientes Passo 01
  const [ingredients2, setIngredients2] = useState<string[]>([]);
  const [selectedCount2, setSelectedCount2] = useState(0);

  // Ingredientes Passo 01
  const [ingredients3, setIngredients3] = useState<string[]>([]);
  const [selectedCount3, setSelectedCount3] = useState(0);

  
  const [carrinho, setCarrinho] = useState<string[]>([]);
  
  
  //PASS0 01

  const addIngredient = (ingredient: string) => {
    if (carrinho.length < 2 && !carrinho.includes(ingredient)) {
      setCarrinho((prevcarrinho) => [...prevcarrinho, ingredient]);
      setIngredients((prevIngredient) => [...prevIngredient, ingredient]);
      setSelectedCount((prevCount) => prevCount + 1);
    }
  };

  const removeIngredient = (ingredient: string) => {
    setCarrinho((prevcarrinho) => prevcarrinho.filter((item) => item !== ingredient));
    setIngredients((prevIngrediente) => prevIngrediente.filter((item) => item !== ingredient));
    setSelectedCount((prevCount) => prevCount - 1);
  };

  //PASS0 02

  const addIngredient2 = (ingredient: string) => {
    if (selectedCount2 < 2 && !carrinho.includes(ingredient)) {
      setCarrinho((prevcarrinho) => [...prevcarrinho, ingredient]);
      setIngredients2((prevIngredient) => [...prevIngredient, ingredient]);
      setSelectedCount2((prevCount) => prevCount + 1);
    }
  };

  const removeIngredient2 = (ingredient: string) => {
    setCarrinho((prevcarrinho) => prevcarrinho.filter((item) => item !== ingredient));
    setIngredients2((prevIngrediente) => prevIngrediente.filter((item) => item !== ingredient));
    setSelectedCount2((prevCount) => prevCount - 1);
  };

  const addIngredient3 = (ingredient: string) => {
    if (selectedCount3 < 2 && !carrinho.includes(ingredient)) {
      setCarrinho((prevcarrinho) => [...prevcarrinho, ingredient]);
      setIngredients3((prevIngredient) => [...prevIngredient, ingredient]);
      setSelectedCount3((prevCount) => prevCount + 1);
    }
  };
  
  const removeIngredient3 = (ingredient: string) => {
    setCarrinho((prevcarrinho) => prevcarrinho.filter((item) => item !== ingredient));
    setIngredients3((prevIngrediente) => prevIngrediente.filter((item) => item !== ingredient));
    setSelectedCount3((prevCount) => prevCount - 1);
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
      value={{ ingredients, carrinho, selectedCount, addIngredient, removeIngredient, ingredients2, selectedCount2, addIngredient2, removeIngredient2, ingredients3,  selectedCount3, addIngredient3, removeIngredient3, clearIngredients }}
    >
      {children}
    </IngredientContext.Provider>
  );
};