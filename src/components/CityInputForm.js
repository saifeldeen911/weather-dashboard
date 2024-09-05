import React, { Component } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const validationSchema = Yup.object().shape({
  city: Yup.string().required("City is required"),
});

export default class CityInputForm extends Component {
  handleSubmit = (values, { setSubmitting }) => {
    this.props.onSubmit(values.city);
    setSubmitting(false);
  };

  render() {
    return (
      <Formik
        initialValues={{ city: "" }}
        validationSchema={validationSchema}
        onSubmit={this.handleSubmit}
      >
        {({ isSubmitting }) => (
          <Form className="flex flex-col space-y-4">
            <div>
              <Field
                type="text"
                name="city"
                placeholder="Enter city name"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-gray-500"
              />
              <ErrorMessage
                name="city"
                component="div"
                className="text-red-500 text-sm mt-1"
              />
            </div>
            <button
              type="submit"
              disabled={isSubmitting}
              className="bg-gray-800 text-white px-4 py-2 rounded-md hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-opacity-50"
            >
              Get Weather
            </button>
          </Form>
        )}
      </Formik>
    );
  }
}
