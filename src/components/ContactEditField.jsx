const ContactEditField = ({
  typeLabel,
  typeId,
  typeValue,
  handleTyoeChange,
  addressLabel,
  addressId,
  addressValue,
  handleAddressChange,
}) => {
  return (
    <fieldset>
      <label htmlFor={typeId}>
        {typeLabel}
        <input
          type="text"
          id={typeId}
          name={typeId}
          value={typeValue}
          onChange={handleTyoeChange}
        />
      </label>
      <label htmlFor={addressId}>
        {addressLabel}
        <input
          type="text"
          id={addressId}
          name={addressId}
          value={addressValue}
          onChange={handleAddressChange}
        />
      </label>
    </fieldset>
  );
};

export default ContactEditField;
