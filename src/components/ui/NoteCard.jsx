import {
  Box,
  Heading,
  Button,
  Card,
  CardBody,
  HStack,
  VStack,
  Text
} from '@chakra-ui/react'
import { CheckCircle, FileEdit, Trash } from 'lucide-react'
import { showFormattedDate } from '@/utils'
import { Link } from 'react-router-dom'

export const NoteCard = ({ id, title, body, createdAt }) => {
  return (
    <Card
      w='full'
      cursor='default'
      bg='brand.softDark'
      color='brand.light'
      transitionDuration='300ms'
      _hover={{ bg: 'brand.border', transform: 'translateY(-2px)' }}>
      <CardBody display='flex' p={3} gap={3} justifyContent='space-between'>
        <HStack gap={3}>
          <Button
            p={0}
            color='brand.light'
            variant='ghost'
            _hover={{ color: 'brand.success' }}>
            <CheckCircle />
          </Button>
          <Box display='flex' flexDir='column' gap={2}>
            <Link to={`/detail/${id}`}>
              <Heading
                as='h2'
                fontSize='lg'
                fontWeight='600'
                _hover={{ textDecor: 'underline' }}>
                {title}
              </Heading>
            </Link>
            <Text fontSize='sm' fontWeight='300'>
              {`${body.slice(0, 70)}...`}
            </Text>
          </Box>
        </HStack>
        <VStack>
          <Text fontSize='12px' fontWeight={700}>
            {showFormattedDate(createdAt)}
          </Text>
          <HStack gap={0}>
            <Button
              p={0}
              color='brand.light'
              variant='ghost'
              _hover={{ color: 'brand.success' }}>
              <FileEdit />
            </Button>
            <Button
              p={0}
              color='brand.light'
              variant='ghost'
              _hover={{ color: 'brand.danger' }}>
              <Trash />
            </Button>
          </HStack>
        </VStack>
      </CardBody>
    </Card>
  )
}
