import {Box, Flex, Input, Button, Text} from '@chakra-ui/react'
import {useRouter} from 'next/router'
import { FC, useState } from 'react'
import {useSWRConfig} from 'swr'
import { auth } from '../lib/mutations'
import NextImage from 'next/image'

const Authform: FC<{ mode: 'signin' | 'signup' }> = ({ mode }) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const router = useRouter()

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsLoading(true)

    const user = await auth(mode, { email, password })
    setIsLoading(false)
    router.push('/')
  }

  return (
    <Box height="100vh" width="100vw" bg="black" color="white">
      <Flex
        justify="center"
        align="center"
        height="100px"
        borderBottom="white 1px solid"
      >
        <NextImage src="/logo.svg" height={60} width={120} />
      </Flex>
      <Flex justify="center" align="center" height="calc(100vh - 100px)">
        <Box padding="50px" bg="gray.900" borderRadius="6px">
          <form onSubmit={handleSubmit}>
            <Input
              placeholder="usar user@test.com"
              type="email"
              onChange={(e) => setEmail(e.target.value)}
            />
            <Input
              placeholder="usar 'password'"
              type="password"
              onChange={(e) => setPassword(e.target.value)}
            />
            <Button
              type="submit"
              bg="green.500"
              isLoading={isLoading}
              sx={{
                "&:hover": {
                  bg: "green.300",
                  color: "green.900",
                },
              }}
            >
              {mode}
            </Button>
            <Box marginTop="20px">
              <Text>Login with user "user@test.com" and password "password".</Text>
              <Text>Select "Playlist" on sidebar.</Text>
              <Text>Click on "Play" or on any playlist's track music.</Text>
              <Text>Player on bottom page fully operational.</Text>
              <Text>Menu on sidebar functionality to be developed.</Text>
            </Box>
          </form>
        </Box>
      </Flex>
    </Box>
  );
}

export default Authform