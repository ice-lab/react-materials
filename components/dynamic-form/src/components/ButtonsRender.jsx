function DomButton(props){
  let { htmlType, name, text, url, className, props:componentProps = {}, handler} = props
  return <button
    type={htmlType}
    name={name}
    className={className}
    url={url}
    onClick={() => {
      handler && handler()
    }}
    {...componentProps}
  >
    {text}
  </button>
}

export default function ButtonsRender({ data, context }) {
  let { type, name, text, handler, props:componentProps = {} } = data
  let { components, formCore } = context;
  let Button = components[type]
  let { onClick } = componentProps
  componentProps.onClick = () => {
    onClick && onClick(formCore)
  }
  if(Button){
    return <Button
      key={name}
      onClick={() => {
        handler && handler(formCore)
      }}
      {...componentProps}
      >
        {text}
      </Button>
  }
  else return <DomButton key={name} {...data}/>
}