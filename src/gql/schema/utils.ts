import { FieldConfigModelType, OrderConfigModelType, ProductConfigModelType } from '@/models';

export const getOrderFormFieldConfig = (orderConfig: OrderConfigModelType, name: string) => {
  return orderConfig.orderFormFieldsConfigs.find((field) => field.name === name) as FieldConfigModelType;
};

export const getProductFormFieldConfig = (productConfig: ProductConfigModelType, name: string) => {
  return productConfig.formFieldsConfigs.find((field) => field.name === name) as FieldConfigModelType;
};
