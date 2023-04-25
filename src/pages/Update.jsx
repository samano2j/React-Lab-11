import { useParams } from "react-router-dom"

import { useOyatsuByIdSelector } from "../hooks/useOyatsuByIdSelector"

import Form from "../components/Form"

const Update = () => {
  const item = useOyatsuByIdSelector(useParams())

  return (
    <div className="container mx-auto px-4">
      <div className="prose mx-auto">
        <h2 className="mt-8">Update</h2>
        <Form item={item} />
      </div>
    </div>
  )
}

export default Update