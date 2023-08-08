interface IStyle {
  [name: string]: string

  block: string
  field: string
}

export const fieldStyle: IStyle = {
  block: 'mx-2 my-1',
  field: 'py-1 px-3 h-10 border border-disable rounded-lg text-disable bg-white items-center min-w-10',
}
