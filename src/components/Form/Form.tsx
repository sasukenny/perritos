import React, { useState } from 'react';
import {
  Input,
  Select,
  TextArea,
} from '../../common/Types/ComponentTypes/ComponentTypes';

import Button from '../Buttons/Button/Button';

type Props = {
  inputs: Input[];
  textAreas: TextArea[];
  selects: Select[];
  callback: Function;
  btnLabel: string;
};

const Form = ({ inputs, callback, btnLabel, textAreas, selects }: Props) => {
  const [data, setData] = useState({});

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    const form = e.currentTarget;
    e.currentTarget.className += ' was-validated';
    e.preventDefault();
    if (form.checkValidity() === false) {
      e.stopPropagation();
    } else {
      callback(data);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.type !== 'file') {
      setData({ ...data, [e.target.name]: e.target.value });
    } else {
      const files = e.target.files;
      if (!files || !files[0]) return;
      setData({ ...data, [e.target.name]: files[0] });
    }
    console.log(data);
  };

  const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleTextAreaChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const restrictFileType = (name: string): string => {
    if (name === 'image') return '.png,.jpg';

    return '';
  };

  return (
    <form noValidate onSubmit={handleSubmit}>
      {selects.map((select) => {
        return (
          <div className="form-group my-3">
            <div className="d-flex">
              <label htmlFor={select.name} className="form-label">
                {select.label}
              </label>
            </div>

            <select
              className="form-select"
              id={select.name}
              name={select.name}
              placeholder={select.placeholder}
              required={select.required}
              onChange={handleSelectChange}
            >
              <option disabled selected value="">
                -- Elija una opcion --
              </option>
              {select.options.map((option) => {
                return <option value={option.id}>{option.name}</option>;
              })}
            </select>
            <div className="valid-feedback">{select.validFeedback}</div>
            <div className="invalid-feedback">{select.invalidFeedback}</div>
          </div>
        );
      })}
      {inputs.map((input) => {
        return (
          <div className="form-group my-3">
            <div className="d-flex">
              <label htmlFor={input.name} className="form-label">
                {input.label}:
              </label>
            </div>

            <input
              maxLength={input.maxLength}
              minLength={input.minLength}
              className="form-control"
              type={input.type}
              id={input.name}
              name={input.name}
              placeholder={input.placeholder}
              onChange={handleInputChange}
              required={input.required}
              accept={restrictFileType(input.name)}
            />
            <div className="valid-feedback">{input.validFeedback}</div>
            <div className="invalid-feedback">{input.invalidFeedback}</div>
          </div>
        );
      })}
      {textAreas.map((textArea) => {
        return (
          <div className="form-group my-3">
            <label htmlFor={textArea.name} className="form-label">
              {textArea.label}
            </label>
            <textarea
              maxLength={textArea.maxLength}
              minLength={textArea.minLength}
              className="form-control"
              id={textArea.name}
              name={textArea.name}
              placeholder={textArea.placeholder}
              required={textArea.required}
              rows={textArea.rows}
              onChange={handleTextAreaChange}
            />
            <div className="valid-feedback">{textArea.validFeedback}</div>
            <div className="invalid-feedback">{textArea.invalidFeedback}</div>
          </div>
        );
      })}

      <div className="d-flex justify-content-center ">
        <Button type="submit" size="lg" color="primary" elevated>
          {btnLabel}
        </Button>
      </div>
    </form>
  );
};

export default Form;
