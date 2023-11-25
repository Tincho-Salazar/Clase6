import React, { useState } from 'react';
import './RegistroForm.css';
import {
  Button,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Stack,
  useColorModeValue,
  Alert,
  IconButton,
  InputGroup,
  InputRightElement,
  FormErrorMessage,
} from '@chakra-ui/react';
import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons';
import { Formik, Field, Form } from 'formik';
import * as Yup from 'yup';

const validationSchema = Yup.object().shape({
  nombre: Yup.string()
    .matches(/^[a-zA-ZñÑ]+$/, '*El nombre solo puede contener letras')
    .min(2, '*El nombre debe tener al menos 2 caracteres')
    .max(50, '*El nombre no puede tener más de 50 caracteres')
    .required('*El nombre es obligatorio'),
  apellido: Yup.string()
    .matches(/^[a-zA-ZñÑ]+$/, '*El apellido solo puede contener letras')
    .min(2, '*El apellido debe tener al menos 2 caracteres')
    .max(50, '*El apellido no puede tener más de 50 caracteres')
    .required('*El apellido es obligatorio'),
  email: Yup.string()
    .matches(
      /^[a-zA-Z0-9._%+-ñÑ]+@[a-zA-Z0-9.-ñÑ]+\.[a-zA-Z]{2,}$/,
      '*El email no es válido'
    )
    .required('*El email es obligatorio'),
  telefono: Yup.string()
    .matches(/^[0-9]+$/, '*El teléfono solo puede contener números')
    .min(10, '*El teléfono debe tener al menos 10 dígitos')
    .max(15, '*El teléfono no puede tener más de 15 dígitos')
    .required('*El teléfono es obligatorio'),
  password: Yup.string()
    .min(8, '*La contraseña debe tener al menos 8 caracteres')
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/,
      '*Al menos una mayúscula, una letra minúscula y un número'
    )
    .required('*La contraseña es obligatoria'),
  confirmarPassword: Yup.string()
    .oneOf([Yup.ref('password')], '*Las contraseñas deben coincidir')
    .required('*La confirmación de la contraseña es obligatoria'),
});

const RegistroForm = () => {
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const TogglePassView = () => {
    setShowPassword(!showPassword);
  };

  const TogglePassConfirmView = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  const ManejoSubmit = (values, { resetForm }) => {
    console.log(values); 
    // Muestra el mensaje de éxito
    setShowSuccessMessage(true);
    // Limpia el formulario
    resetForm();
    //Oculta el mensaje
    setTimeout(() => {
      setShowSuccessMessage(false);
    }, 3000);
  };

  return (
    <Flex
      width="100vw"
      // height="100vh"
      minH="calc(100vh - 50px - 50px - 25px)"
      align="center"
      justify="center"
      bg="#FAF6F0" 
    >
      <Stack
        spacing={4}
        w="full"
        maxW="md"
        bg={useColorModeValue('white', 'gray.700')}
        rounded="xl"
        boxShadow="dark-lg"
        p={6}
        my={12}
      >
        <Heading lineHeight={1.1} fontSize={{ base: '2xl', sm: '3xl' }} 
        textAlign='center'>        
          Formulario de Registro        
        </Heading>

        {showSuccessMessage && (
          <Alert status="success" mb={4}>
            {/* <AlertIcon /> */}
            ¡Registro exitoso!
          </Alert>
        )};

        <Formik
          initialValues={{
            nombre: '',
            apellido: '',
            email: '',
            telefono: '',
            password: '',
            confirmarPassword: '',
          }}
          validationSchema={validationSchema}
          onSubmit={ManejoSubmit}
        >
          <Form noValidate>
            <Field name="nombre">
              {({ field, form }) => (
                <FormControl
                  isInvalid={form.errors.nombre && form.touched.nombre}
                >
                  <FormLabel>Nombre</FormLabel>
                  <Input
                    {...field}
                    placeholder="Nombre"
                    _placeholder={{ color: 'gray.400', fontSize: 'sm' }}
                    borderColor="transparent"
                    _focus={{ bg: 'gray.100' }}
                    outline='none'
                  />
                  <FormErrorMessage>
                    {form.errors.nombre}
                  </FormErrorMessage>
                </FormControl>
              )}
            </Field>

            <Field name="apellido">
              {({ field, form }) => (
                <FormControl
                  isInvalid={form.errors.apellido && form.touched.apellido}
                >
                  <FormLabel>Apellido</FormLabel>
                  <Input
                    {...field}
                    placeholder="Apellido"
                    _placeholder={{ color: 'gray.400', fontSize: 'sm' }}
                    borderColor="transparent"
                    _focus={{ bg: 'gray.100' }}
                  />
                  <FormErrorMessage>
                    {form.errors.apellido}
                  </FormErrorMessage>
                </FormControl>
              )}
            </Field>

            <Field name="email">
              {({ field, form }) => (
                <FormControl
                  isInvalid={form.errors.email && form.touched.email}
                >
                  <FormLabel>Email address</FormLabel>
                  <Input
                    {...field}
                    placeholder="your-email@example.com"
                    _placeholder={{ color: 'gray.400', fontSize: 'sm' }}
                    borderColor="transparent"
                    _focus={{ bg: 'gray.100' }}
                  />
                  <FormErrorMessage>{form.errors.email}</FormErrorMessage>
                </FormControl>
              )}
            </Field>

            <Field name="telefono">
              {({ field, form }) => (
                <FormControl
                  isInvalid={form.errors.telefono && form.touched.telefono}
                >
                  <FormLabel>Teléfono</FormLabel>
                  <Input
                    {...field}
                    placeholder="Teléfono"
                    _placeholder={{ color: 'gray.400', fontSize: 'sm' }}
                    borderColor="transparent"
                    _focus={{ bg: 'gray.100' }}
                  />
                  <FormErrorMessage>
                    {form.errors.telefono}
                  </FormErrorMessage>
                </FormControl>
              )}
            </Field>

            <Field name="password">
              {({ field, form }) => (
                <FormControl
                  isInvalid={form.errors.password && form.touched.password}
                >
                  <FormLabel>Contraseña</FormLabel>
                  <InputGroup>
                    <Input
                      {...field}
                      placeholder="Contraseña"
                      _placeholder={{ color: 'gray.400', fontSize: 'sm' }}
                      type={showPassword ? 'text' : 'password'}
                      borderColor="transparent"
                      _focus={{ bg: 'gray.100' }}
                    />
                    <InputRightElement width="3rem">
                      <IconButton
                        h="1.75rem"
                        size="sm"
                        variant="ghost"
                        color="current"
                        onClick={TogglePassView}
                        icon={
                          showPassword ? (
                            <ViewIcon boxSize={4} />
                          ) : (
                            <ViewOffIcon boxSize={4} />
                          )
                        }
                        borderColor="transparent"
                        _focus={{borderColor:"transparent", bg:"none"}}
                        border="none"                        
                      />
                    </InputRightElement>
                  </InputGroup>
                  <FormErrorMessage>
                    {form.errors.password}
                  </FormErrorMessage>
                </FormControl>
              )}
            </Field>

            <Field name="confirmarPassword">
              {({ field, form }) => (
                <FormControl
                  isInvalid={
                    form.errors.confirmarPassword &&
                    form.touched.confirmarPassword
                  }
                >
                  <FormLabel>Confirmar Contraseña</FormLabel>
                  <InputGroup>
                    <Input
                      {...field}
                      placeholder="Confirmar Contraseña"
                      _placeholder={{ color: 'gray.400', fontSize: 'sm' }}
                      type={showConfirmPassword ? 'text' : 'password'}
                      borderColor="transparent"
                      _focus={{ bg: 'gray.100' }}
                    />
                    <InputRightElement width="3rem">
                      <IconButton
                        h="1.75rem"
                        size="sm"
                        variant="ghost"
                        color="current"
                        onClick={TogglePassConfirmView}
                        icon={
                          showConfirmPassword ? (
                            <ViewIcon boxSize={4} />
                          ) : (
                            <ViewOffIcon boxSize={4} />
                          )
                        }
                        border="none"
                      />
                    </InputRightElement>
                  </InputGroup>
                  <FormErrorMessage>
                    {form.errors.confirmarPassword}
                  </FormErrorMessage>
                </FormControl>
              )}
            </Field>

            <Stack spacing={6} direction={['column', 'row']} mt="2.5rem">
              <Button
                bg={'red.400'}
                color={'white'}
                w="full"
                _hover={{ bg: 'red.500' }}
                type="reset"
                border='transparent'
              >
                Cancelar
              </Button>
              <Button
                bg={'blue.400'}
                color={'white'}
                w="full"
                _hover={{ bg: 'blue.500' }}
                type="submit"
                border='transparent'
              >
                Registrarse
              </Button>
            </Stack>
          </Form>
        </Formik>
      </Stack>
    </Flex>
  );
};

export { RegistroForm };
