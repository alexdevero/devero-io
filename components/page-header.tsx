import { Interface } from "readline"

interface PageHeaderUI {
  title: String;
}

export const PageHeader = (props: PageHeaderUI) => (
  <div className="pt-4 pb-4 text-center">
    <h1 className="h1">{props.title}</h1>

    <hr className="divider" />
  </div>
)
