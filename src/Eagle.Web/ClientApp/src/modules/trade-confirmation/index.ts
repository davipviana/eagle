import { Module } from 'shared/types';
import { TradeConfirmationForm } from './components';

export const tradeConfirmationModule: Module = {
    name: "Trade Confirmation",
    path: "/trade-confirmation",
    component: TradeConfirmationForm
}