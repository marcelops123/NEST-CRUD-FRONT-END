/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useState } from "react";

import { ChakraProvider, Button, HStack, VStack, AspectRatio } from "@chakra-ui/react"
import axios from "axios";
import { Center, Wrap, WrapItem } from '@chakra-ui/react'
import {Alert, InputNumber, Spin, Switch, Table, Typography} from 'antd';
import { Input,  Popconfirm, Form } from 'antd';
import { DeleteOutlined, } from '@ant-design/icons';
import { EditOutlined } from '@ant-design/icons';
import { useFetch } from "../../UseFetch";
import useSWR, { SWRConfig } from 'swr'
import { loadavg } from "os";

export default function App() {
    
  interface RoomModel {
    id: string; 
    nome: string;
    email: string;
    senha: string;
    telefone: string;
    sexo: string;
    data_nasc: string;
    estado: string;
    cidade: string;
    endereco: string;
    key: string;
    name: string;
    age: number;
    address: string;
 
  }
  class Card extends React.Component {
    state = { loading: false };
  
    toggle = (value: any) => {
      this.setState({ loading: value });
    };
  
  
      
  }

  const [rooms, setRooms] = useState<RoomModel[]>([]);
  
  const { data, mutate} = useFetch("http://localhost:3001/usuarios/buscar") 
          
            console.log(data)
            mutate()
           
          interface Item {

            key: string;
            id: string
            name: any;
            age: number;
            address: string;
            nome: any;
            email: string;
            senha: string;
            telefone: string;
            sexo: string;
            data_nasc: string;
            estado: string;
            cidade: string;
            endereco: string;
          }
          
          const originData: RoomModel[] = [];
            originData.push({
              key: toString(),
              name: '',
              age: 1,
              address: ``,
              id: '',
              nome:'',
              email:'',
              senha:'',
              telefone:'',
              sexo:'',
              data_nasc: '',
              estado: '',
              cidade: '',
              endereco: ''
            });
          
            interface EditableCellProps extends React.HTMLAttributes<HTMLElement> {
            editing: boolean;
            dataIndex: string;
            title: any;
            inputType: 'number' | 'text';
            record: Item;
            index: number;
            children: React.ReactNode;
          }
          
          const EditableCell: React.FC<EditableCellProps> = ({
            editing,
            dataIndex,
            title,
            inputType,
            record,
            index,
            children,
            ...restProps
          }) => {
            const inputNode = inputType === 'number' ? <InputNumber /> : <Input />;
          
            return (
              <td {...restProps}>
                {editing ? (
                  <Form.Item
                    name={dataIndex}
                    style={{ margin: 0 }}
                    rules={[
                      {
                        required: true,
                        message: `Por favor insira! ${title}!`,
                      },
                    ]}
                  >
                    {inputNode}
                  </Form.Item>
                ) : (
                  children
                )}
              </td>
            );
          };
          
          const EditableTable = () => {
            const [form] = Form.useForm();
            const [room] = useState<RoomModel[]>([]);
            const [editingKey, setEditingKey] = useState('');
          
            const isEditing = (record: RoomModel) => record.id === editingKey;
          
            const edit = (record: Partial<RoomModel> & { id: React.Key }) => {
              form.setFieldsValue({setRooms, ...record });
              setEditingKey(record.id);
            };
          
            const cancel = () => {
              setEditingKey('');
            };
            
          const save = async (key: React.Key) => {
              try {
                const row = (await form.validateFields()) as RoomModel;
          
                const newData = [...room];
                const index = newData.findIndex(item => key === item.key);
                if (index > -1) {
                  const item = newData[index];
                  newData.splice(index, 1, {
                    ...item,
                    ...row,
                  });
                  setRooms(newData);
                  setEditingKey('');
                } 
                
                else {
                  newData.push(row);
                  setRooms(newData);
                  setEditingKey('');
                  axios.post("http://localhost:3001/usuarios/alterar",{newData}).then (() => {
                    mutate();
                    console.log(newData[0])
                    
                  })
                }
              }
                catch (errInfo) {
                console.log('Validate Failed:', errInfo);
              }
            };
            
          const deleterow = async (key: string) => {
          axios.delete("http://localhost:3001/usuarios/deletar",{data: {key}})
              .then(response => {
                console.log(response)
                mutate();
               }
     
               ) }
                    
            const columns = [
              {
                title: 'ID',
                dataIndex: 'id',
                width: '90px',
                editable: true,

              },
            
              {
                title: 'Nome',
                dataIndex: 'nome',
                width: '21000px',
                editable: true,
               
              },
              {
                title: 'Email',
                dataIndex: 'email',
                width: '21000px',
                editable: true,
               },
              
               {
                title: 'Senha',
                dataIndex: 'senha',
                width: '21000px',
                editable: true,
               },
            
              {
                title: 'Estado',
                dataIndex: 'estado',
                width: '21000px',
                editable: true,
               },
              
               {
                title: 'Cidade',
                dataIndex: 'cidade',
                width: '21000px',
                editable: true,
              },
              
              {
                title: 'Editar',
                dataIndex: 'operation',
                width: '200px',
                render: (_: any, record: RoomModel) => {
                  const editable = isEditing(record);
                  return editable ? (
                    <span>
                      <ChakraProvider>
                      <Typography.Link onClick={() => save(record.id)} style={{ marginRight: 8 }}>
                        Salvar
                      </Typography.Link>
                      <Popconfirm title="Tem certeza que quer cancelar?" onConfirm={cancel}>
                        <a>Cancelar</a>
                      </Popconfirm>
                      </ChakraProvider>
                    </span>
                  ) : (
                    <ChakraProvider>
                    <Typography.Link disabled={editingKey !== ''} onClick={() => edit(record)}>
                       <Button ><EditOutlined /></Button>
                    </Typography.Link>
                    </ChakraProvider>
                       );
                      },  
                    },
                    {
                      title: 'Deletar',
                      dataIndex: 'deletar',     
                      width: '200px',
                      
                      render: (_: any, record: RoomModel) => {
                      const editable = isEditing(record);
                  return editable ? (
                    <span>
                      <ChakraProvider>
                      <Typography.Link onClick={() => deleterow(record.id)} style={{ marginRight: 8 }}>
                        Excluir
                      </Typography.Link>
                      </ChakraProvider>
                    </span>
                  ) : (
                    <ChakraProvider>
                    <Typography.Link disabled={editingKey !== ''} onClick={() => deleterow(record.id)}>
                       <Button  ><DeleteOutlined /> </Button>
                    </Typography.Link>
                       </ChakraProvider>
                    
                       );
      
                    },
                  }
                    
                  ];
             
           const mergedColumns = columns.map(col => {
              if (!col.editable) {
                return col;
              }
              return {
                ...col,
                onCell: (record: RoomModel) => ({
                  record,
                  inputType: col.dataIndex === 'age' ? 'number' : 'text',
                  dataIndex: col.dataIndex,
                  title: col.title,
                  editing: isEditing(record),
                }),
              };
            });
          
            return (
              <Form form={form} component={false}>
                <Table
                  components={{
                    body: {
                      cell: EditableCell,
                    },
                  }}
                  bordered
                  dataSource={data}
                  columns={mergedColumns}
                  rowClassName="edi table-row"
                  pagination={false}
                  size="large"
                  
                  
                />
              </Form>
            );
          };

          return (
            <SWRConfig value={{refreshInterval: 3000}} > 
              <body>
              <ChakraProvider>
                <nav className="navbar navbar-expand-lg navbar-light bg-primary">
                  <a className="navbar-brand" href="#">Lista de Usuários</a>
                  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                  </button>
                  <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                      <li className="nav-item">
                        <a className="nav-link" id="lista" href="http://localhost:3000">Formulário</a>
                      </li>
                      <li className="nav-item">

                      </li>
                      </ul>
                  </div>
                </nav>
              </ChakraProvider>
             <Wrap align='center' alignItems='center'>
                <WrapItem>
            <Center w='-30000px' padding={180} h='700px' bg='red.200'>
            <VStack paddingY={100} width={1600}>
            <EditableTable/>  
              </VStack>
              </Center>
            </WrapItem>
              </Wrap>
            </body>
              <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossOrigin="anonymous"></link>
              </SWRConfig>
     );

    };