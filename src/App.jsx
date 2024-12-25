import {Button} from '@/components/ui/button'
import {
  Form,
  FormItem,
  FormLabel,
  FormControl,
  FormDescription,
  FormMessage,
  FormField,
} from './components/ui/form'
import {Input} from '@/components/ui/input'

import {useForm} from 'react-hook-form'
import * as yup from 'yup'
import {yupResolver} from '@hookform/resolvers/yup'

const App = () => {
  const formSchema = yup.object().shape({
    username: yup.string().required(),
    email: yup.string().email().required(),
    age: yup.number().positive().integer().min(18).required(),
    password: yup.string().min(8).max(32).required(),
    confirmPassword: yup.string().oneOf([yup.ref('password'), null]),
  })

  const {
    register,
    handleSubmit,
    formState: reset,
  } = useForm({
    resolver: yupResolver(formSchema),
  })

  const onSubmitHandler = (data) => {
    console.log({data})
    reset()
  }

  return (
    <Form {...Form}>
      <form onSubmit={handleSubmit(onSubmitHandler)} className="space-y-8">
        <FormField
          control={Form.control}
          name="username"
          render={() => (
            <>
              <>
                <>
                  <>
                    <FormItem>
                      <FormLabel>Username</FormLabel>
                      <FormControl>
                        <Input placeholder="Full Name" {...register("username")} />
                      </FormControl>
                      <FormDescription>
                        This is your public display name.
                      </FormDescription>
                      <FormMessage />
                    </FormItem>
                    <FormItem>
                      <FormLabel>Email</FormLabel>
                      <FormControl>
                        <Input placeholder="shadcn" {...register("email")} />
                      </FormControl>
                      <FormDescription>This is your email</FormDescription>
                      <FormMessage />
                    </FormItem>
                  </>
                  <FormItem>
                    <FormLabel>Age</FormLabel>
                    <FormControl>
                      <Input placeholder="shadcn" {...register("age")} />
                    </FormControl>
                    <FormDescription>This is your age.</FormDescription>
                    <FormMessage />
                  </FormItem>
                </>
                <FormItem>
                  <FormLabel>Password</FormLabel>
                  <FormControl>
                    <Input placeholder="shadcn" {...register("password")} />
                  </FormControl>
                  <FormDescription>
                    This is your password.
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              </>
              <FormItem>
                <FormLabel>Confirm Password</FormLabel>
                <FormControl>
                  <Input placeholder="shadcn" {...register("confirmPassword")} />
                </FormControl>
                <FormDescription>
                  This is where you confirm password.
                </FormDescription>
                <FormMessage />
              </FormItem>
            </>
          )}
        />
        <Button type="submit">Submit</Button>
      </form>
    </Form>
  )
}

export default App
