import React, { ComponentProps } from 'react';
import './App.css';
import {
  useCardPasswordInput,
  useCardExpDateInput,
  useCardNumbersInput,
  useCardCVCInput,
  useCardCompanyInput,
} from './lib';

export interface InputProps extends ComponentProps<'input'> {
  isValid?: boolean;
}

function CardBrandSelect() {
  const { cardCompany, onChangeHandler } = useCardCompanyInput();
  return (
    <div>
      <select onChange={onChangeHandler}>
        <option></option>
        <option>하나카드</option>
        <option>삼성카드</option>
        <option>토스카드</option>
      </select>
      <p>선택된 카드 브랜드: {cardCompany}</p>
    </div>
  );
}

function Input({ isValid, ...props }: InputProps) {
  return <input {...props} />;
}

export interface InputFieldProps {
  title: string;
  label: string;
  error: { isValid: boolean; errorMessage: string };
  children: React.ReactNode;
}

function InputField({ title, label, error, children }: InputFieldProps) {
  return (
    <div>
      <div>
        <h3>{title}</h3>
      </div>
      <div>
        <label className="tx-lg">{label}</label>
        <div>{children}</div>
        <p>{!error.isValid && error.errorMessage}</p>
      </div>
    </div>
  );
}

const CardNumberInput = () => {
  const { cardNumberGroups, cardBrand, onChangeHandler, error } = useCardNumbersInput();
  return (
    <InputField title="카드 번호" label="라벨 cardNumbers" error={error}>
      <Input type="text" name="0" onChange={onChangeHandler} autoFocus />
      <Input type="text" name="1" onChange={onChangeHandler} autoFocus />
      <Input type="text" name="2" onChange={onChangeHandler} autoFocus />
      <Input type="text" name="3" onChange={onChangeHandler} autoFocus />
      <p>실시간 value : {cardNumberGroups.join(' ')}</p>
      <p>카드사 value : {cardBrand}</p>
    </InputField>
  );
};

const CardExpDateInput = () => {
  const { cardExpDate, onChangeHandler, error } = useCardExpDateInput();
  return (
    <InputField title="유효기간" label="라벨 cardExpDate" error={error}>
      <Input type="text" name="month" onChange={onChangeHandler} autoFocus />
      <Input type="text" name="year" onChange={onChangeHandler} autoFocus />
      <p>인풋 실시간 value - month : {cardExpDate.month}</p>
      <p>인풋 실시간 value - year : {cardExpDate.year}</p>
    </InputField>
  );
};

const CardCVCInput = () => {
  const { cardCVC, onChangeHandler, error } = useCardCVCInput();
  return (
    <InputField title="CVC" label="라벨 cardCVC" error={error}>
      <Input type="text" name="cvc" onChange={onChangeHandler} autoFocus />
      <p>인풋 실시간 value : {cardCVC}</p>
    </InputField>
  );
};

const CardPasswordInput = () => {
  const { cardPassword, onChangeHandler, error } = useCardPasswordInput();
  return (
    <InputField title="비밀번호" label="라벨 비밀번호" error={error}>
      <Input type="password" name="cardPassword" onChange={onChangeHandler} autoFocus />
      <p>인풋 실시간 value : {cardPassword}</p>
    </InputField>
  );
};

function App() {
  return (
    <form>
      <div>
        <div>
          <CardBrandSelect />
          <CardNumberInput />
          <CardExpDateInput />
          <CardCVCInput />
          <CardPasswordInput />
        </div>
        <div></div>
      </div>
    </form>
  );
}

export default App;
